import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppRoutes from './src/AppRoutes'

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppRoutes /> 
    </>
  );
}
