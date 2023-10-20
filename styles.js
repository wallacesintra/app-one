import { StyleSheet } from "react-native";

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
        padding: 10,
        bottom: 0,
        marginTop: 200,
        alignItems: 'center',

    },
    txtCreate: {
        alignItems: 'center'
    }, 
    txtCreate: {
        fontSize: 18
    },
    linkCreate: {
        fontSize: 18,
    }
})

export default styles