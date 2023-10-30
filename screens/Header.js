import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  unstable_batchedUpdates,
  Dimensions,
} from "react-native";

import React, { useEffect, useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native'
import AppNaviagtion from "../navigation/appNavigation";
const {width, height} = Dimensions.get('window')
const Header = () => {
  const [movieList, setMoviveList] = useState([])
  const [comingList, setComingList] = useState([])
  const [toprateList, setTopRateList] = useState([])
  const [nowPlayingList, setNowPlayingList] = useState([])
  const getMovie = () => {
      fetch("https://api.themoviedb.org/3/discover/movie?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US")
      .then((res) =>  res.json())
      .then(data => setMoviveList(data.results))
    }
  const upcoming = () => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US')
    .then(res => res.json())
    .then(data => setComingList(data.results))
  }
  const toprate = () => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US') 
    .then(res => res.json())
    .then(data => setTopRateList(data.results))
  }

  const nowPlaying = () => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US')
    .then(res => res.json())
    .then(data => {
      setNowPlayingList(data.results)
     
    })
   
  }
  useEffect(() => {
      getMovie()
      upcoming()
      toprate()
      nowPlaying()
  },[])
  const navigation = useNavigation()

  const handleClick = (item) => {
    navigation.navigate("Movie", item)
  }
  return (
    <ScrollView
      style={{ flex: 1, position: "relative", backgroundColor: "black" }}
    >
      <View style={{ width: "100%", height: 400 }}>
        <Image
          source={require("../assets/image/poster.png")}
          style={{ width: "100%", height: "100%" }}
        />
        <StatusBar barStyle="light-content" />
      </View>
      <View style={styles.header}>
        <Image
          source={require("../assets/image/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerItem}>TV Shows</Text>
        <Text style={styles.headerItem}>Movies</Text>
        <Text style={styles.headerItem}>My List</Text>
        <TouchableOpacity onPress={() => {navigation.navigate("Search")}}>
        <Ionicons name = "search" size={30} color='white'/>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>
        <View style={styles.title}>
          <Text style={[styles.titleMenu, styles.top]}>Top {`\n`} 10</Text>
          <Text style={styles.titleMenu}>#2 in Nigeria Today</Text>
        </View>
        <View style={styles.tools}>
          <View style={styles.lists}>
            <Ionicons name="add-outline" size={40} style={styles.iconList} />
            <Text style={styles.textList}>My List</Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#c4c4c4",
              borderRadius: 3,
              flexDirection: "row",
              alignItems: "center",
              marginRight: 5,
              paddingHorizontal: 50,
            }}
          >
            <Ionicons name="play" size={30} style={{ color: "black" }} />
            <Text style={{ fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>
              Play
            </Text>
          </TouchableOpacity>
          <View style={{ alignItems: "center" }}>
            <Ionicons
              name="information-circle-outline"
              size={40}
              style={{ color: "#fff" }}
            />
            <Text style={{ color: "#fff", fontSize: 15 }}>Info</Text>
          </View>
        </View>

        <Text
          style={{
            color: "#fff",
            marginTop: 40,
            fontSize: 25,
            fontWeight: "700",
            width: "100%",
            marginLeft: 5,
            marginBottom: 20,
          }}
        >
          Previews
        </Text>
        <View style={{ height: 130, marginBottom: 20 }}>
          <ScrollView horizontal={true}>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>

            <View style={{ height: 130 }}>
              <Image
                style={{
                  width: 115,
                  height: 115,
                  borderRadius: 115,
                  marginRight: 10,
                }}
                source={require("../assets/image/nguoisoi.png")}
              />
            </View>
          </ScrollView>
        </View>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "700",
            width: "100%",
            marginLeft: 5,
          }}
        >
          Continue Watching for Emenalo
        </Text>

        <ScrollView horizontal={true}>
        {nowPlayingList.map(movie => (
          <View style={{ width: 200, paddingHorizontal: 10 }}>
    <TouchableOpacity onPress={() => handleClick(movie)}>
        <Image
          key={movie.id} 
          source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
          style={{ width: '100%', height: 300 }}
        />
    </TouchableOpacity>
    <View
              style={{
                backgroundColor: "#121212",
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Ionicons
                name="information-circle-outline"
                size={40}
                style={{ color: "#fff" }}
              />
              <Ionicons
                name="ellipsis-vertical-outline"
                size={30}
                style={{ color: "#fff" }}
              />
            </View>
          </View>
  ))}
          
        </ScrollView>

        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Popular on Netflix
        </Text>
        <ScrollView horizontal={true}>
          {movieList.map(movie => (
          <View style={{ width: 200, paddingHorizontal: 10 }}>
    <Image
      key={movie.id} 
      source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
      style={{ width: '100%', height: 300 }}
    />
          </View>
  ))}
         
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Trending Now
        </Text>
        <ScrollView horizontal={true}>
        {comingList.map(movie => (
          <View style={{ width: 200, paddingHorizontal: 10 }}>
    <Image
      key={movie.id} 
      source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
      style={{ width: '100%', height: 300 }}
    />
          </View>
  ))}
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Top Rate
        </Text>
        <ScrollView horizontal={true}>
        {toprateList.map(movie => (
          <View style={{ width: 200, paddingHorizontal: 10 }}>
    <Image
      key={movie.id} 
      source={{uri: 'https://image.tmdb.org/t/p/w500' + movie.poster_path}}
      style={{ width: '100%', height: 300 }}
    />
          </View>
  ))}
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          My List
        </Text>
        <ScrollView horizontal={true}>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          African Movies
        </Text>
        <ScrollView horizontal={true}>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Nollywood Movies & TV
        </Text>
        <ScrollView horizontal={true}>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
        </ScrollView>
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "800",
            width: "100%",
            marginLeft: 5,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Netflix Originals
        </Text>
        <ScrollView horizontal={true}>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
          <View style={{ width: 200, paddingHorizontal: 10 }}>
            <Image
              source={require("../assets/image/endgame.png")}
              style={{ width: "100%" }}
            />
          </View>
        </ScrollView>
        
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    right: 0,
    left: 0,
    marginTop: 50,
    height: 48,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  logo: {
    width: 30,
    height: 48,
  },

  headerItem: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },

  posterImg: {
    width: "100%",
    height: "100%",
  },

  menu: {
    backgroundColor: "black",
    width: "100%",

    bottom: 0,
    alignItems: "center",
  },

  title: {
    flexDirection: "row",
    alignItems: "center",
  },

  titleMenu: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  top: {
    marginRight: 10,
    borderColor: "#fff",
    borderWidth: 2,
    width: 30,
    fontSize: 9,
    height: 30,
    textAlign: "center",
    fontWeight: "bold",
  },

  tools: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  lists: {
    alignItems: "center",
  },

  iconList: {
    color: "#fff",
  },

  textList: {
    color: "#fff",
  },
});

export default Header;
