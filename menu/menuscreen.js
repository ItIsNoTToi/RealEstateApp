import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AppIntroSlider from 'react-native-app-intro-slider';

 
const itemmenu = [
    {
        image1: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title1: 'Breakfast',
        image2: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title2: 'Breakfast',
    },
    {
        image1: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title1: 'Breakfast',
        image2: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title2: 'Breakfast',
    },
    {
        image1: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title1: 'Breakfast',
        image2: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title2: 'Breakfast',
    },
    {
        image1: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title1: 'Breakfast',
        image2: require('./image/egg-in-nest-blt-sandwiches-1707p38.png'),
        title2: 'Breakfast',
    },
];

const menuscreen = () =>
{
    const menu = () =>
    {
        return itemmenu.map((item, index) => (
            <View style={StyleSheet.create({
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: '100%',
                height: 200,
            })} key={`item_${index}`}>
                <View style={StyleSheet.create({
                    width: '100%',
                    height: 200,
                    flexDirection: 'row',
                })}>
                    <View style={StyleSheet.create({
                        width: '50%',
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                    })}>
                        <Image style={StyleSheet.create({
                            width: '100%',
                            height: '100%',
                        })} source={item.image1}/>

                        <Text style={StyleSheet.create({
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '300',
                            position: 'absolute',
                            fontSize: 20,
                        })}>{item.title1}</Text>
                    </View>
                    
                    <View style={StyleSheet.create({
                        width: '50%',
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10,
                    })}>
                        <Image style={StyleSheet.create({
                            width: '100%',
                            height: '100%',
                        })} source={item.image2}/>

                        <Text style={StyleSheet.create({
                            textAlign: 'center',
                            color: 'white',
                            fontWeight: '300',
                            position: 'absolute',
                            fontSize: 20,
                        })}>{item.title2}</Text>
                    </View>
                </View>
            </View>
        ));
    };
    return(
        <ScrollView>
            <View style={styles.header}>
                <FontAwesome name="bars" size={30} />
                <Text style={StyleSheet.create({
                    color:'black',

                })}>Menu</Text>
                <FontAwesome name="shopping-cart" size={30} />
            </View>
            <View >
                <View >{menu()}</View>
                <View></View>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 45,
        alignItems: 'center',
    },
}); 

export default menuscreen;