//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image, StatusBar} from 'react-native';
//import LogIn from './src/components/log-in';
//import Flat from './src/components/flatlist';
import SignIn from './src/screens/sign-in';
import LogIn from './src/screens/log-in';


export default function App() {
  return (
    <SafeAreaView style = {styles.container}>
      <LogIn />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  }
})

