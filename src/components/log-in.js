import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput} from "react-native";
const LogIn = () => {
    return (
        <SafeAreaView style = {styles.container}>
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


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        width: '100%'
    },
    hero: {
        marginTop: 60,
        padding: 10,
        justifyContent: "center"
    },
    hello: {
        fontSize: 120,
        fontWeight: "bold",
    },
    sign: {
        fontSize: 30
    },
    input: {
        padding: 10,
        // width: 350
    }, 
    inputName: {
        fontSize: 22,
        width: 320,
        marginBottom: 15,
              
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 20,
        padding: 7
    }, 
    forgot: {
        alignItems: 'flex-end',
        marginLeft: 3,
        fontWeight: '200',
        fontSize: 15
    }

})
export default LogIn