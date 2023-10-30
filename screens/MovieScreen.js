import {
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation, useRoute } from "@react-navigation/native";
import Video from "react-native-video";


const ios = Platform.OS === "ios";
const {width, height} = Dimensions.get('window')
export default function MovieScreen() {
  const navigation = useNavigation();
  const handelClick = () => {
    navigation.goBack();
  };
  const {params: item} = useRoute()
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ width: "100%" }}>
        <SafeAreaView style={{ wdith: "100%" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "orange",
                marginLeft: 30,
                borderRadius: 10,
              }}
              onPress={handelClick}
            >
              <Ionicons
                name="chevron-back-outline"
                size={40}
                style={{ color: "white", padding: 5 }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                marginLeft: 20,
                fontWeight: 700,
              }}
            >
              {item.title}
            </Text>

          </View>
          {/* <View style = {{backgroundColor: 'yellow', width: '100%', height: 300, marginTop: 30}}>

              </View> */}
              <View style = {{marginTop: 20}}>
                <Image source={{uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}} style = {{height: height * 0.6, borderRadius: 10}} />
            </View>
            <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width * 0.5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,fontWeight: 'bold'}}>
                      Trailer
                    </Text>

                    </View>
                  </TouchableOpacity>
                  
            <View style = {{flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity style = {{ paddingHorizontal: 20,  borderRadius: 10, width: width / 5, marginTop: 20}}>
                    <View style = {{backgroundColor: 'orange', borderRadius: 10}}>

                    <Text style = {{color: 'white', textAlign: 'center', padding: 10,}}>1</Text>

                    </View>
                  </TouchableOpacity>
                  
            </View>
        </SafeAreaView>
        {/* <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}} /> */}
      </View>
    </ScrollView>
  );
}
