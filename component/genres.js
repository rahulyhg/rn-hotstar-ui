import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GridView from 'react-native-super-grid';
import MyComp from './myComp';

export default class Language extends Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Genres</Text></View>,

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
            { name: 'ROMANCE' }, { name: 'DRAMA' },
            { name: 'FAMILY' }, { name: 'REALITY' },
            { name: 'COMEDY' }, { name: 'CRIME' },
            { name: 'ACTION' }, { name: 'TALKSHOW' },
            { name: 'TEEN' }, { name: 'AWARDS' },
            { name: 'BIOPIC' },{ name: 'SCIENCE' }, 
            { name: 'TRAVEL' },{ name: 'WILDLIFE' },
            { name: 'DOCUMENTRY' }, { name: 'HORROR' },
            { name: 'THRILLER' }, { name: 'SPORT' },
             
        ];

        return (
            <MyComp images={require('../images/joy.jpg')}
                    overlay={items} />
            // <GridView
            //     itemDimension={120}
            //     items={items}
            //     style={styles.gridView}
            //     renderItem={item => (
            //         <View style={[styles.itemContainer]}>
            //             <Image
            //                 style={styles.image}
            //                 source={require('../images/crime.png')} />
                        
            //             <View style={{borderRadius:4,height:'100%',width:'100%',backgroundColor:'rgba(0,0,0,0.4)',position:'absolute',top:0,left:0}}>
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