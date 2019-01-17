import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, GridView, View, Image, ScrollView, ListView, FlatList, TouchableOpacity } from "react-native";
import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class Sports extends Component {
    constructor() {
        super();
        this.state = {
            data: ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth'],
            index: 1,
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView contentContainerStyle={{ flexWrap:'nowrap' }}>
                        <FlatList
                            extraData={this.state.index}
                            data={this.state.data}
                            keyExtractor={(x, i) => i.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            renderItem={
                                ({ item, index }) =>
                                    <View style={styles.listView}>
                                        <Image
                                            style={styles.listImage}
                                            source={require('../images/cricket.jpg')} />
                                        <View style={styles.iconView}>
                                            <Icon style={styles.icon} color='white' size={24} name='play' />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ color: 'white' }} >{item}</Text>
                                                <Text style={{ color: 'white' }} >World Cup</Text>
                                                <Text style={{ color: 'white' }} >Streaming Live</Text>

                                            </View>
                                        </View>
                                    </View>
                            }
                        />
                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>Popular Sports</Text>
                            <Text style={styles.sectionHeaderMore}>MORE</Text>
                        </View>
                        <FlatList
                            extraData={this.state.index}
                            data={this.state.data}
                            keyExtractor={(x, i) => i.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            renderItem={
                                ({ item, index }) =>
                                    <View>
                                        <Image
                                            style={styles.imageSectionSports}
                                            source={require('../images/hockey.jpg')} />
                                            <View style={styles.iconViewSports}>
                                            <View style={{ marginLeft: 10 }}>
                                                
                                                <Text style={{ color: 'white' }} >Hockey</Text>
                                                

                                            </View>
                                        </View>
                                    </View>
                            }
                        />
                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>IPL 2018</Text>
                            <Text style={styles.sectionHeaderMore}>MORE</Text>
                        </View>
                        <FlatList
                            extraData={this.state.index}
                            data={this.state.data}
                            keyExtractor={(x, i) => i.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}

                            renderItem={
                                ({ item, index }) =>
                                    <View style={{ marginVertical: 5 }}>
                                        <Image
                                            style={styles.imageSectionSports}
                                            source={require('../images/ipl.jpg')} />
                                    </View>
                            }
                        />

                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>TNPL 2018</Text>
                            <Text style={styles.sectionHeaderMore}>MORE</Text>
                        </View>
                        <FlatList
                            extraData={this.state.index}
                            data={this.state.data}
                            keyExtractor={(x, i) => i.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={
                                ({ item, index }) =>
                                    <View style={{  marginVertical: 5 }}>
                                        <Image
                                            style={styles.imageSection}
                                            source={require('../images/cricket.jpg')} />
                                    </View>
                            }
                        />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
mainContainer:{
    flex:1,
},
listView:{
    marginVertical: 10,
    height:200,
},
listImage:{
    width: 375,
    height: '100%', 
    marginHorizontal: 3, 
    borderRadius: 6,
},
iconView:{
    position: 'absolute', 
    bottom: '2%', 
    left: '2%', 
    flexDirection: 'row', 
},
icon:{
    alignSelf: 'center', 
    justifyContent: 'center', 
},
sectionHeaderView:{
    flexDirection: 'row', 
    marginVertical: 10, 
    width: '100%', 
    justifyContent: 'space-between',
},
sectionHeader:{
    color: 'black', 
    fontSize: 16, 
    fontWeight: '400', 
    left: 10,
},
sectionHeaderMore:{ 
    color: 'rgb(84, 161, 40)', 
    right: 10
},
imageSection:{ 
    width: 120, 
    height: 170, 
    marginHorizontal: 3, 
    borderRadius: 3 
},
imageSectionSports:{ 
    height: 120, 
    width: 170, 
    marginHorizontal: 3, 
    borderRadius: 3 ,
},
iconViewSports:{
    position: 'absolute', 
    bottom: '2%', 
    right: '10%', 
    flexDirection: 'row', 
},
});