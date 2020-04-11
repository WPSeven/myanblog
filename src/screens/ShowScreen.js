import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
import PassengerBottomSheet from '../components/PassengerBottomSheet';
import RBSheet from "react-native-raw-bottom-sheet";

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));

    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>

        <TouchableOpacity onPress={() => this.Standard.open()} style={styles.button}>
            <Text style={styles.buttonTitle}>STANDARD</Text>
        </TouchableOpacity>
    </View>
}


ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: (
            <TouchableOpacity onPress={() => { navigation.navigate('Edit', { id: navigation.getParam('id') }) }}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>)
    };
};


const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        padding: 25
    },
    listTitle: {
        fontSize: 16,
        marginBottom: 20,
        color: "#666"
    },
    listButton: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10
    },
    listIcon: {
        fontSize: 26,
        color: "#666",
        width: 60
    },
    listLabel: {
        fontSize: 16
    },
});

export default ShowScreen;