import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ImageBackground} from "react-native";
import Input from "../components/input";
import Socials from "../components/socials";

const  SignIn= () => {
    return (
        <SafeAreaView style = {styles.container}>
            <ImageBackground
                source={require('../../assets/back.jpg')}
                resizeMode= "cover"
            >
            
                <View >
                    <Text style = {styles.title}>Create account</Text>
                    <Input />
                    <Socials />
                </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        alignItems: 'center',
        fontSize: 30
    },
})
export default SignIn