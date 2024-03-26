

import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function App() {


  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <NavigationContainer>
        <Text>This is  text!</Text>
      </NavigationContainer>
    </SafeAreaView>
  );
}


export default App;
