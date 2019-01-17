import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GridView from 'react-native-super-grid';
import MyComp from './myComp';

export default class Language extends Component {
    static navigationOptions = {
        
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Language</Text></View>,

        headerStyle: {
            backgroundColor: 'rgb(84, 161, 40)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }
    render() {
        const items = [
            { name: 'Hindi' }, { name: 'Gujarati' },
            { name: 'English' }, { name: 'Bengali' },
            { name: 'Telugu' }, { name: 'Marathi' },
            { name: 'Tamil' }, { name: 'Urdu' },
            { name: 'Kannada' }, { name: 'Odia' },
            { name: 'Malayalam' },
        ];

        return (
            <MyComp images={require('../images/hindi.jpg')}
                    overlay={items} />
            // <GridView
            //     itemDimension={130}
            //     items={items}
            //     style={styles.gridView}
            //     renderItem={item => (
            //         <View style={[styles.itemContainer]}>
            //             <Image
            //                 style={styles.image}
            //                 source={require('../images/hindi.jpg')} />
                        
            //             <View style={{borderRadius:4,height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,0.5)',position:'absolute',top:0,left:0}}>
            //                 </View>
            //                 <Text style={styles.itemName}>{item.name}</Text>


            //         </View>
            //     )}
            // />
        );
    }
}

// const styles = StyleSheet.create({
//     gridView: {
//         paddingVertical: 25,
//         flex: 1,
//     },
//     itemContainer: {
//         justifyContent: 'flex-end',
//         // borderRadius: 4,
//         // padding: 10,
//         height: 120,
//     },
//     itemName: {
//         fontSize: 16,
//         color: '#fff',
//         fontWeight: '600',
//         position: 'absolute',
//         alignSelf: 'center',
//         top: '45%',
//     },
//     itemCode: {
//         fontWeight: '600',
//         fontSize: 12,
//         color: '#fff',
//     },
//     image: {
//         height: '100%',
//         width: '100%',
//         borderRadius: 4,
//     },
// })