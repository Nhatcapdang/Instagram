import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  HomeStackScreen,
  SearchStackScreen,
  FavouriteStackScreen,
  ProfileStackScreen,
} from '../StackNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'TabHome') {
              iconName = focused ? (
                <MaterialIcons name="home" size={30} color={color} />
              ) : (
                <MaterialCommunityIcons
                  name="home-outline"
                  size={40}
                  color={color}
                />
              );
            } else if (route.name === 'TabDiscovery') {
              iconName = focused ? (
                <Ionicons name="search-outline" size={30} color={color} />
              ) : (
                <Ionicons name="search-sharp" size={30} color={color} />
              );
            }
            if (route.name === 'TabPost') {
              iconName = focused ? (
                <IconFontAwesome name="heartbeat" size={30} color={color} />
              ) : (
                <IconFontAwesome name="heart-o" size={30} color={color} />
              );
            } else if (route.name === 'TabProfile') {
              iconName = focused ? (
                <IconFontAwesome name="user-circle-o" size={30} color={color} />
              ) : (
                <EvilIcons name="user" size={30} color={color} />
              );
            }

            // You can return any component that you like here!
            return iconName;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#730217',
          inactiveTintColor: '#090B0D',
          showLabel: false,

          //   activeBackgroundColor: "blue",
          //   inactiveBackgroundColor: "green",
        }}>
        <Tab.Screen
          name="TabHome"
          options={{tabBarVisible: true, title: 'Home'}}
          component={HomeStackScreen}
        />
        <Tab.Screen name="TabDiscovery" component={SearchStackScreen} />
        <Tab.Screen name="TabPost" component={FavouriteStackScreen} />
        {/* <Tab.Screen name="Notifications" component={NotificationsScreen} /> */}
        <Tab.Screen name="TabProfile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
