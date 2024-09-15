import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const App = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.style1}>
                <Text style={styles.Text}>Order your favorite!</Text>
            </View>
            <View style={styles.style2}>
                <Image source={require('../assets/Data/Image_96.png')} style={{width: 150, height: 150, marginLeft: 215}}/>
                <Image source={require('../assets/Data/Image 95.png')} style={{width: 150, height: 150, marginLeft: 20, marginTop: -25}}/>
                <Image source={require('../assets/Data/Image 97.png')} style={{width: 150, height: 150, marginLeft: 0, marginTop: 30}}/>
            </View>
            <View style={styles.style3}>
                <TouchableOpacity style={{backgroundColor: 'green', borderRadius: 40, width240, height: 50, justifyContent: 'center', alignContent: 'center'}} onPress={() => {navigation.navigate('Screen_02')}}>
                    <Text style={{fontSize: 20, color: 'white'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff',
    },
    style1: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    style2: {
        flex: 3,
        backgroundColor: '#fff',
    },
    style3: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: 'green',
        fontSize: 30,
        fontWeight  : 'bold',
    },
    Image: {
        width: 150,
        height: 150,
    }
})

export default App;