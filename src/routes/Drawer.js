import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import {Header} from '../components';

import {
  Home,
  Wheather,
  WeatherScreen,
  PharmacyScreen,
  NamazScreen,
} from '../screens';
import {RouterNames} from '../config';
const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#153448',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '400',
        },
      }}>
      <Drawer.Screen name={RouterNames.Home} component={TabNavigator} />
      <Drawer.Screen name={RouterNames.NamazScreen} component={NamazScreen} />
      <Drawer.Screen
        name={RouterNames.PharmacyScreen}
        component={PharmacyScreen}
      />
      <Drawer.Screen
        name={RouterNames.WeatherScreen}
        component={WeatherScreen}
      />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

/*
header: () => {
          return <Header />;
        },
*/
