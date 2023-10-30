import { createStackNavigator } from "@react-navigation/stack";
import { Dimensions, Image, View, Text, ScrollView } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import Header from "./Header";
import { StyleSheet } from "react-native";
const Stack = createStackNavigator();

const TvShows = () => {
    return null;
}

const windowHeight = Dimensions.get('window').height;


function HomeScreen() {
    return (
          // <ScrollView>
               <Header /> 
          // </ScrollView>
     );
}

const styles = StyleSheet.create({
    iconList: {
        color: '#fff',
   },
   
   textList: {
        color: '#fff',
   }
})
export default HomeScreen;