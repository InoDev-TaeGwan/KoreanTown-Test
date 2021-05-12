import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../../screens';
import City from '../../screens/MainPage/City';

const Tab = createBottomTabNavigator();

const CityTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="City" component={City} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default CityTab;
