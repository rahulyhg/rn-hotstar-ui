import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, GridView, View, Image, ScrollView, ListView, FlatList, TouchableOpacity } from "react-native";
import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
export default class Movies extends Component {
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
                                            source={require('../images/joy.jpg')} />
                                    </View>
                            }
                        />
                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>Laws of Attraction</Text>
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
                                            style={styles.imageSection}
                                            source={require('../images/beauty.png')} />
                                    </View>
                            }
                        />
                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>Drama Fever</Text>
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
                                            style={styles.imageSection}
                                            source={require('../images/stepup.png')} />
                                    </View>
                            }
                        />

                        <View style={styles.sectionHeaderView}>
                            <Text style={styles.sectionHeader}>Popular Movies</Text>
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
                                            source={require('../images/wakeupsid.jpg')} />
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
    bottom: '10%', 
    left: '10%', 
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
});