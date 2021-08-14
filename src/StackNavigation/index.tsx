import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Search,
  Favourite,
  Profile,
  SingUp,
  SingIn,
  Splash,
} from '../components';
import {Text} from 'react-native';
// import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import {SCREEN} from '../const';
const RootStack = createStackNavigator();

export function RootStackScreen() {
  return (
    <RootStack.Navigator
      // screenOptions={{ header: () => null }}
      initialRouteName={SCREEN.SCREEN_SIGN_IN}>
      <RootStack.Screen
        name={SCREEN.SCREEN_HOME}
        component={Home}
        options={{
          // title: 'Nhat Cap Dang',
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerStyle: {
            backgroundColor: '#FA4A0C',
          },
          headerRightContainerStyle: {
            marginRight: 15,
          },
          // headerLeft: () => <Feather name="camera" size={25} color={'#000'} />,
          headerLeft: () => (
            <Material
              name="menu-open"
              size={30}
              color={'#000'}
              // onPress={() => navigation.toggleDrawer()}
            />
          ),
          headerTitle: () => (
            <Text style={{textAlign: 'center', fontSize: 20}}>
              Nhat Cap Dang
            </Text>
          ),
          headerRight: () => (
            <Ionicons
              name="paper-plane-outline"
              size={30}
              color={'#545454'}
              // onPress={() => navigation.navigate('Search')}
            />
          ),
        }}
      />

      <RootStack.Screen name={SCREEN.SCREEN_SEARCH} component={Search} />
      <RootStack.Screen name={SCREEN.SCREEN_FAVOURITE} component={Favourite} />
      <RootStack.Screen name={SCREEN.SCREEN_PROFILE} component={Profile} />
      <RootStack.Screen name={SCREEN.SCREEN_SIGN_UP} component={SingUp} />
      <RootStack.Screen
        name={SCREEN.SCREEN_SIGN_IN}
        options={{
          headerShown: false,
        }}
        component={SingIn}
      />
      <RootStack.Screen
        name={SCREEN.SCREEN_SPLASH}
        options={{
          headerShown: false,
        }}
        component={Splash}
      />
    </RootStack.Navigator>
  );
}
