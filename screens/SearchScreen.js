import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Touchable,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
  TouchableOpacity,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const [text, setText] = useState("Search for a show, movie, genre, e.t.c");
  const navigation = useNavigation();
  return (
    <KeyboardAvoidingView behavior={Platform == "ios"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{ backgroundColor: "black", paddingTop: 40, height: "100%" }}
        >
          <View style = {{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style = {{backgroundColor: 'orange', borderRadius: 10, marginRight: 20}}>
              <Ionicons
                name="chevron-back-outline"
                size={40}
                style={{ color: "white", padding: 5 }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#424242",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 20,
              flex: 1,
              borderRadius: 10
            }}
          >
            <Ionicons name="search" size={20} style={{ color: "#c4c4c4" }} />
            <TextInput
              style={styles.input}
              placeholder="Search for a show, movie, genre, e.t.c"
              onChange={setText}
              value={text}
            />
            <Ionicons
              name="mic"
              size={25}
              style={{ color: "#c4c4c4", paddingHorizontal: 20 }}
            />
          </View>
          </View>
         
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 30,
                paddingVertical: 20,
                paddingLeft: 20,
                fontWeight: "800",
              }}
            >
              Top Searches
            </Text>
            <View>
              <View
                style={{
                  backgroundColor: "#424242",
                  marginBottom: 10,
                  height: 76,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/image/nguyento2.png")}
                  style={{ height: "100%", width: 150 }}
                />
                <Text style={{ color: "white" }}>Xứ sở các nguyên tố</Text>
                <Ionicons
                  name="play-circle-outline"
                  size={40}
                  style={{ color: "white" }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#424242",
                  marginBottom: 10,
                  height: 76,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/image/nguyento2.png")}
                  style={{ height: "100%", width: 150 }}
                />
                <Text style={{ color: "white" }}>Xứ sở các nguyên tố</Text>
                <Ionicons
                  name="play-circle-outline"
                  size={40}
                  style={{ color: "white" }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#424242",
                  marginBottom: 10,
                  height: 76,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/image/nguyento2.png")}
                  style={{ height: "100%", width: 150 }}
                />
                <Text style={{ color: "white" }}>Xứ sở các nguyên tố</Text>
                <Ionicons
                  name="play-circle-outline"
                  size={40}
                  style={{ color: "white" }}
                />
              </View>
              <View
                style={{
                  backgroundColor: "#424242",
                  marginBottom: 10,
                  height: 76,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Image
                  source={require("../assets/image/nguyento2.png")}
                  style={{ height: "100%", width: 150 }}
                />
                <Text style={{ color: "white" }}>Xứ sở các nguyên tố</Text>
                <Ionicons
                  name="play-circle-outline"
                  size={40}
                  style={{ color: "white" }}
                />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    flex: 1,
    color: "#c4c4c4",
  },
});

export default SearchScreen;
