
import { Tabs } from 'expo-router';

import { Ionicons } from '@expo/vector-icons';
import React from 'react';



export default function TabLayout() {

  return (

    <Tabs

      screenOptions={({ route }) => ({

        tabBarIcon: ({ size }) => {

          if (route.name === 'index') return <Ionicons name="home" size={size} color="#007AFF" />;

          if (route.name === 'sobre') return <Ionicons name="person" size={size} color="#007AFF" />;

          if (route.name === 'curriculo') return <Ionicons name="document-text" size={size} color="#007AFF" />;
          
          if (route.name === 'jogo') return <Ionicons name="game-controller" size={size} color="#007AFF" />;
          return null;

        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#007AFF',
        headerShown: true,
      })}>

      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre' }} />
      <Tabs.Screen name="curriculo" options={{ title: 'Currículo' }} />
      <Tabs.Screen name="jogo" options={{ title: 'Jogo' }} />

    </Tabs>
  );
}
