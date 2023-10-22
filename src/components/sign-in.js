import React from "react";
import { SafeAreaView, View, Text, StyleSheet} from "react-native";
import Input from "./input";
import Socials from "./socials";

const  SignIn= () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View >
                <Text style = {styles.title}>Create account</Text>
                <Input />
                <Socials />
            </View>
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