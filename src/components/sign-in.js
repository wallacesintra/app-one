import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput} from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons';

const  SignIn= () => {
    return (
        <SafeAreaView style = {styles.container}>
            <View >
                <Text style = {styles.title}>Create account</Text>
                <View style = {styles.inputContainer}>
                    <Entypo name="user" size={20} color="black" style = {styles.icon}/>
                    <TextInput
                        style = {styles.input}
                        placeholder="Username"
                    />
                </View>

                <View style = {styles.inputContainer}>
                    <Entypo name="lock" size={20} color="black" style = {styles.icon}/>
                    <TextInput
                        style = {styles.input}
                        placeholder="Password"
                        secureTextEntry = {true}
                    />
                </View>

                <View style = {styles.inputContainer}>
                    <Entypo name="mail" size={20} color="black" style = {styles.icon}/>
                    <TextInput
                        style = {styles.input}
                        placeholder="Email"
                    />
                </View>

                <View style = {styles.inputContainer}>
                    <Entypo name="phone" size={20} color="black" style = {styles.icon}/>
                    <TextInput
                        style = {styles.input}
                        placeholder="Mobile"
                    />
                </View>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center'
    },
    title: {
        alignItems: 'center',
        fontSize: 30
    },
    inputContainer: {
        margin: 10,
        padding: 9,
        alignItems: 'center',
        width: 320,
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row'
    }, 
    icon: {
        padding: 3,
    },
    input: {
        fontSize: 20,
        marginLeft: 7,
    }
})
export default SignIn