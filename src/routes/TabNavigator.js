import {Image} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Wheather} from '../screens';
import {Icons} from '../assets';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#153448'},
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={Icons.home}
                tintColor={focused ? 'white' : 'gray'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Wheather"
        component={Wheather}
        options={{
          tabBarIcon: ({size, focused, color}) => {
            return (
              <Image
                style={{width: 20, height: 20}}
                source={Icons.search}
                tintColor={focused ? 'white' : 'gray'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
