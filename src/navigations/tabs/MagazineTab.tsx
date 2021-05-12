import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../../screens';
import Magazine from '../../screens/MainPage/Magazine';

const Tab = createBottomTabNavigator();

const MagazineTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Magazine" component={Magazine} />
      <Tab.Screen name="Login" component={Login} />
    </Tab.Navigator>
  );
};

export default MagazineTab;
