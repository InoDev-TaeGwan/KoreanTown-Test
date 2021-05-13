import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Login} from '../../screens';
import City from '../../screens/MainPage/City';
import {
  LibraryOutline,
  LibrarySharp,
  GridOutline,
  Grid,
} from '../../assets/icons';
import ArrowsSolid from '../../assets/icons/ArrowsSolid';

const Tab = createBottomTabNavigator();

const CityTab = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="City"
          component={City}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) =>
              focused ? <LibrarySharp /> : <LibraryOutline />,
          }}
        />
        <Tab.Screen
          name="Home"
          component={City}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => <ArrowsSolid />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => (focused ? <Grid /> : <GridOutline />),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default CityTab;
