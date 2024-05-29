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
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="NamazScreen" component={NamazScreen} />
      <Drawer.Screen name="PharmacyScreen" component={PharmacyScreen} />
      <Drawer.Screen name="WeatherScreen" component={WeatherScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;

/*
header: () => {
          return <Header />;
        },
*/
