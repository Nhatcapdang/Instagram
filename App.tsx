import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import TabNavigation from './src/TabNavigation';
import {NavigationContainer} from '@react-navigation/native';
// import DrawerNavigator from './src/DrawerNavigator';

import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <TabNavigation />
      {/* <DrawerNavigator /> */}
    </NavigationContainer>
    // </SafeAreaView>
  );
}
