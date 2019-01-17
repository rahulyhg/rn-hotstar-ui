import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import GridView from 'react-native-super-grid';

export default class Language extends Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Channels</Text></View>,

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
            <GridView
                itemDimension={120}
                items={items}
                style={styles.gridView}
                renderItem={item => (
                    <View style={[styles.itemContainer]}>
                        <Image
                            style={styles.image}
                            source={require('../images/starplus.jpg')} />
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        paddingVertical: 25,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        // borderRadius: 4,
        // padding: 10,
        height: 120,
        backgroundColor:'white',
        elevation:4
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        position: 'absolute',
        alignSelf: 'center',
        top: '45%',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
    image: {
        height: '100%',
        width: '100%',
        borderRadius: 4,
    },
})