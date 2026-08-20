import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { AddScreen } from '../screens/AddScreen';
import { ReelsScreen } from '../screens/ReelsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { 
          backgroundColor: colors.tabBar, 
          borderTopWidth: 0.5,
          borderTopColor: colors.tabBarBorder,
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom > 0 ? insets.bottom : 8,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.text,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen 
        name="Feed" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="home" size={28} color={color} /> }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="search" size={28} color={color} /> }}
      />
      <Tab.Screen 
        name="Add" 
        component={AddScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="add-box" size={28} color={color} /> }}
      />
      <Tab.Screen 
        name="Reels" 
        component={ReelsScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="video-library" size={28} color={color} /> }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => <Icon name="account-circle" size={28} color={color} /> }}
      />
    </Tab.Navigator>
  );
};
