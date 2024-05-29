import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Wheather} from '../screens';
import Drawer from './Drawer';
import { RouterNames } from '../config';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Drawer">
      <Stack.Screen name="Drawer" component={Drawer} />
      <Stack.Screen name={RouterNames.Home} component={Home} />
      <Stack.Screen name={RouterNames.Wheather} component={Wheather} />
    </Stack.Navigator>
  );
};

export default Navigation;
