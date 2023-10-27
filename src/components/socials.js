import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5, Entypo } from '@expo/vector-icons';

const Socials = () => {
    return (
        <View style = {styles.container}>
            <Text>Or Create account using social media</Text>
            <View style= {styles.socials}>
                <FontAwesome5 name="facebook" size={27} color="#4267B2"  style = {{padding: 5}}/>
                <Entypo name="twitter-with-circle" size={27} color="#1DA1F2" style = {{padding: 5}}/>
                <Entypo name="google--with-circle" size={27} color="#DB4437" style = {{padding: 5}}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        alignItems: 'center'
    },
    socials: {
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default Socials