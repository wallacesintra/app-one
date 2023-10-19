import React from "react";
import { SafeAreaView, View, Text, StyleSheet, TextInput, ImageBackground} from "react-native";
import { AntDesign } from '@expo/vector-icons';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        width: '100%'
    },
    hero: {
        marginTop: 60,
        padding: 10,
        alignItems: 'center',
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
        marginTop: 50,
        padding: 10,
        alignItems: 'center'
        // width: 350
    }, 
    inputName: {
        fontSize: 22,
        width: 320,
        marginBottom: 15,
        backgroundColor: 'white',
    

        shadowColor:'#595959',
        shadowOffset: {
            width: -1,
            height: 6,
        },
        shadowOpacity: 0,
        shadowRadius: 10,
        elevation: 12,
        
        borderColor: '#595959',
        borderStyle: 'solid',
        borderWidth: 0.2,
        borderRadius: 20,
        padding: 7
    }, 
    forgot: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginLeft: 3,
        fontWeight: '200',
        fontSize: 15
    },
    image: {
        position: 'relative',
        flex: 1,  
    },
    btnSign: {
        padding: 13,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    txtSign: {
        justifyContent: "center",
        alignItems: 'center',
        padding: 6,
        fontSize: 30
    },
    createAccount: {
        // justifyContent: 'flex-end',
        padding: 10,
        bottom: 3,
        alignContent: 'center',
        flexDirection: 'row'
    },
    txtCreate: {
        alignItems: 'center'
    }


})
export default LogIn