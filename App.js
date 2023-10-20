//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import LogIn from './src/components/log-in';
import Flat from './src/components/flatlist';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Flatlist</Text>
      <Flat/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
