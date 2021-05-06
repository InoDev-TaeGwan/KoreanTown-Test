import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Main, Login} from '../screens';

const Stack = createStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default MainStack;
