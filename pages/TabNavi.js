import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React, {useState} from 'react';
import { Text, View,  Alert,FlatList,RefreshControl, ActivityIndicator} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialTopTabNavigator();
import { Refresher } from './refresh';
  
export function TabNavi () {
  
  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Show the loading</Text>
        <ActivityIndicator size="large" color="red"/> 

      </View>
    );
  }
  
  function Profile() {
    return (
    <View style={{flex:1}}>
      <Refresher />
    </View>)
  }
  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
        
      </View>
    );
  }
  return (<Tab.Navigator
    initialRouteName="Notifications"
    tabBarPosition="bottom"
    screenOptions={{ tabBarActiveTintColor: '#e91e63',  }}
  >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={20} />
          ),
          tabBarBadge: 25,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
</Tab.Navigator>
  );
}