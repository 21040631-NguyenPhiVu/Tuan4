import { StatusBar } from "expo-status-bar"; 
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";  

const App = ({navigation}) => {
    const [data, setData] = useState([
        {key: 1, type: 'Vegetable', name: 'Apple', price: '28.00', image: require('../assets/Data/Image 101.png')},
        {key: 1, type: 'Vegetable', name: 'Pearl', price: '28.00', image: require('../assets/Data/Image 102.png')},
        {key: 1, type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image 103.png')},
        {key: 1, type: 'Vegetable', name: 'Pearl', price: '28.00', image: require('../assets/Data/Image 105.png')},
        {key: 1, type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image 106.png')},
        {key: 1, type: 'Vegetable', name: 'Coconut', price: '28.00', image: require('../assets/Data/Image 107.png')},
        {key: 1, type: 'Vegetable', name: 'Pearl', price: '28.00', image: require('../assets/Data/Image 105.png')},

        {key: 1, type: 'Seafood', name: 'Seafood 1', price: '28.00', image: require('../assets/Data/Image 95.png')},
        {key: 1, type: 'Seafood', name: 'Seafood 2', price: '28.00', image: require('../assets/Data/Image 95.png')},
        {key: 1, type: 'Seafood', name: 'Seafood 3', price: '28.00', image: require('../assets/Data/Image 95.png')},
        {key: 1, type: 'Seafood', name: 'Seafood 4', price: '28.00', image: require('../assets/Data/Image 95.png')},
        {key: 1, type: 'Seafood', name: 'Seafood 5', price: '28.00', image: require('../assets/Data/Image 95.png')},
        
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
        {key: 1, type: 'Drink', name: 'Drink 1', price: '28.00', image: require('../assets/Data/Image_96.png')},
    ]);

    const [type, setType] = useState('Vegetable');
    const [selectedBtn, setSelectedBtn] = useState('Vegetable');
    const [soLuong, setSoLuong] = useState(1);
    return (
        <ScrollView stickyHeaderIndices={[0, -1]}>
            <View style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,
                backgroundColor: 'white',
            }}>
                <TouchableOpacity onPress={() => {navigation.navigate('Screen_02')}}>
                    <Image source={require('../assets/Data/Image 183.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Screen_03')}}>
                    <Image source={require('../assets/Data/Image 182.png')} style={{width: 25, height: 25}}/>
                </TouchableOpacity>
            </View>
            <View style={{
                width: '100%',
                justifyContent: 'center',
                height: 50,
                paddingHorizontal: 20,
            }}>
                <Text style={{fontSize: 25, color: 'green', fontWeight: 'bold'}}>My Basket</Text>
            </View>
            
            <View>
            <FlatList
                data={(data.filter((item) => item.type == type))}
                renderItem={({item}) => (
                    <View style={{
                        width: '100%',
                        padding: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: '2.5%',
                        marginVertical: 10,
                        borderWidth: 1,
                    }}>
                        <Image source={item.image} style={{width: 70, height: 70, marginBottom: 10}} resizeMode="contain"/>
                        <View>
                            <Text style={{fontSize: 25, color: 'green', fontWeight: 'bold'}}>{item.price}</Text>
                            <Text style={{fontSize: 18, color: 'silver'}}>{item.price}</Text>
                            <View>
                                <Image 
                                    source={require('../assets/Data/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                                <Image 
                                    source={require('../assets/Data/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                                <Image 
                                    source={require('../assets/Data/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                                <Image 
                                    source={require('../assets/Data/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                                <Image 
                                    source={require('../assets/Data/Image 180.png')}
                                    style={{width: 15, height: 15, marginTop: 10}}
                                />
                            </View>
                        </View>
                        <View style={{justifyContent: 'center', width: '100%'}}>
                            <View style={{
                                
                            }}>
                                <Text style={{fontSize: 25, color: 'green'}}>Order your favorite</Text>
                                <TouchableOpacity onPress={() => {setInitialItemCount(data.length)}}>
                                    <Text style={{fontSize: 25, color: 'pink'}}>See all</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
                numColumns={2}
            />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default App;