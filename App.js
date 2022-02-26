// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import List from './pages/List';
import View1 from './pages/View1';
import Form from './pages/Form';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={List} options={ {title: '일기 목록' }} />
        <Stack.Screen name="View1" component={View1} />
        <Stack.Screen name="Form" component={Form} options={ {title: '일기 작성' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;