import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import TabNavigation from './src/TabNavigation';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TabNavigation />
    </SafeAreaView>
  );
}
