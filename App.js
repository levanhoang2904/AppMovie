
import React from 'react';
import { Text, View, Image} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import HomeScreen from './screens/HomeScree';
import Header from './screens/Header';
import SearchScreen from './screens/SearchScreen';
import DownloadScreen from './screens/DownloadScreen';
import MovieScreen from './screens/MovieScreen';
import AppNaviagtion from './navigation/appNavigation';
const Tab = createBottomTabNavigator();





const MoreScreen = () => {
  return null
}

export default function App() {
  return (
      <AppNaviagtion />
  );
}

const styles = StyleSheet.create({
  bottomTabIcon: {
    
      color: '#888383',
  },

  bottomTabIconFocused: {
    color: '#fff',
  },
});
