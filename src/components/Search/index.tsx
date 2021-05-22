import * as React from 'react';
import {Button, Text, View} from 'react-native';

export default function Home({navigation}: any) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SEARCH</Text>
      <Button
        title="Go to Tab Settings"
        onPress={() => navigation.navigate('TabProfile')}
      />
    </View>
  );
}
