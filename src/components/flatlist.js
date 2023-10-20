import React from "react";
import { SafeAreaView, View, Text, FlatList, StyleSheet} from "react-native";


const DATA = [
    {
        id: 54576,
        name: 'Wallace', 
        age: 23,
        alias: [ 'Sinatra', 'Metro Boomin', 'Elliot']
    }
]

const Item = (props) => {
    const {id, name, age} = props
    return (
        <View style = {styles.item}>
            <Text>{id}</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}


const Flat = () => {
    const renderItem = ({item}) => {
        return (
            <Item 
                id = {item.id}
                name = {item.name}
                age = {item.age}
            />
        )
    }

    return (
        <SafeAreaView>
            <Text>tytytytyty</Text>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
            />


        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderWidth: 2,
        borderColor: 'black'
    }
})

export default Flat