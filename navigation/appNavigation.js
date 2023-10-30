import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MovieScreen from '../screens/MovieScreen'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/HomeScree';
import SearchScreen from '../screens/SearchScreen';


const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

export default function AppNaviagtion() {
  return (
       <NavigationContainer>
            <stack.Navigator initialRouteName='Home'>
                    <stack.Screen name = 'Movie' component={MovieScreen} options={{
                        headerShown: false
                    }}/>
                    <Tab.Screen name = 'Home' component={HomeScreen} options={{headerShown: false}} />
                    <Tab.Screen name= "Search" component={SearchScreen} options={{headerShown: false}}/>
            </stack.Navigator>
       </NavigationContainer>
            
       
  )
}



