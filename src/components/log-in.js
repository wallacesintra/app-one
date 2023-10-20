import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, ImageBackground} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "../../styles";

const LogIn = () => {
    return (
        <SafeAreaView style = {styles.container}>
        <ImageBackground
            source={require('../../assets/back.jpg')}
            style = {styles.image}
        >
            <View style = {styles.hero}>
                <Text style = {styles.hello}>Hello</Text>
                <Text style = {styles.sign}>Sign in your acoount</Text>
            </View>

            <View  style = {styles.input}>
                <TextInput
                    style = {styles.inputName}
                    placeholder="User name"
                />
                <TextInput
                    style = {styles.inputName}
                    secureTextEntry = {true}
                    placeholder="Password"
                />
                <Text style = {styles.forgot}>Forgot your Password?</Text>
            </View>

            <View style = {styles.btnSign}>
                <Text style = {styles.txtSign}>Sign In</Text>
                <AntDesign name="rightcircle" size={38} color="#89CFF0" />
            </View>

            <View style = {styles.createAccount}>
                <Text style = {styles.txtCreate}>Don't have an account?</Text>
                <Text style = {styles.linkCreate}>Create</Text>
            </View>
        </ImageBackground>
        </SafeAreaView>

    )
}


export default LogIn