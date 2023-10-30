import { Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar'

export default class DownloadScreen extends Component {
  render() {
    return (
      <View style = {{backgroundColor: 'black', height: '100%'}}>
     
        <Text style = {{marginTop: 50, marginLeft: 50, color: 'white'}}>Smart Downloads</Text>
        <View style = {{paddingLeft: 20}}>
            <Text style = {{color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 40, marginBottom: 20}}>Introducing Downloads For You</Text>
            <Text style = {{color: 'white', fontSize: 10, lineHeight: 18}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit quam dui, vivamus bibendum ut. A morbi mi tortor ut felis non accumsan accumsan quis. Massa, id ut ipsum aliquam enim non posuere pulvinar diam.</Text>
            <View style = {{alignItems: 'center', width: '100%'}}>
                 <View style = {{width: 177, height: 177, backgroundColor: '#424242', borderRadius: 177, marginTop: 30, justifyContent: 'center'}}></View>
                <TouchableOpacity style = {{backgroundColor: '#0071eb', width: '100%', alignItems: 'center', paddingVertical: 20, borderRadius: 10, marginHorizontal: 10, marginTop: 20, marginBottom: 40}}>
                    <Text style = {{color: 'white'}}>SET UP</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {{backgroundColor: '#424242', paddingHorizontal: 10, paddingVertical: 10, borderRadius: 10}}>
                    <Text style = {{color: 'white'}}>Find Something to Download</Text>
                </TouchableOpacity>
            </View>
            
            <View>
                <TouchableOpacity>
                    <Text>Find Something to Download</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    )
  }
}