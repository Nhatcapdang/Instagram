import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Search, Favourite, Profile} from '../components';

const HomeStack = createStackNavigator();

export function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{header: () => null}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

const SearchStack = createStackNavigator();

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={Search} />
    </SearchStack.Navigator>
  );
}

export const FavouriteStack = createStackNavigator();

export function FavouriteStackScreen() {
  return (
    <FavouriteStack.Navigator>
      <FavouriteStack.Screen name="Favourite" component={Favourite} />
    </FavouriteStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

export function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}
