import {Tabs} from 'expo-router';
import React from 'react';

import {TabBarIcon} from '@/components/navigation/TabBarIcon';
import {Colors} from '@/constants/Colors';
import {useColorScheme} from '@/hooks/useColorScheme';
import icons from "@/constants/Images";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? icons.home_focus : icons.home} width={22}/>
          ),
        }}
      />
      <Tabs.Screen
        name="ExploreTab"
        options={{
          title: 'Explore',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? icons.explore_focus : icons.explore} width={19.7}/>
          ),
        }}
      />
      <Tabs.Screen
        name="NotifyTab"
        options={{
          title: 'Notify',
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? icons.notify_focus : icons.notify} width={20}/>
          ),
        }}
      />
      <Tabs.Screen
        name="MessagesTab"
        options={{
          title: 'Message',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon source={focused ? icons.message_focus : icons.message} width={20}/>
          ),
        }}
      />
    </Tabs>
  );
}
