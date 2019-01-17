import React, { Component } from 'react';
import { StyleSheet, TextInput, Text, GridView, View, Image, ScrollView, ListView, FlatList, TouchableOpacity } from "react-native";
import { YellowBox } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Premium from './iconPremium';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


export default class list extends Component {
  static navigationOptions = {
    headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Premium</Text></View>,

    headerStyle: {
      backgroundColor: 'rgb(84, 161, 40)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
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
        <ScrollView contentContainerStyle={{ flexWrap: 'nowrap' }}>
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
                  <View style={styles.iconView}>
                    <Icon style={styles.icon} color='white' size={24} name='play' />
                    <View style={{ marginLeft: 10 }}>
                      <Text style={{ color: 'white' }} >{item}</Text>
                      <Text style={{ color: 'white' }} >Game of Thrones</Text>
                      <Text style={{ color: 'white' }} >Available now on hotstar</Text>
                    </View>

                  </View>
                  <View style={styles.premium}>
                    <Premium />
                  </View>

                </View>
            }
          />
          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeader}>New On Hotstar</Text>
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
                    source={require('../images/greatescape.png')} />
                  <View style={styles.premiumSub}>
                    <Premium />
                  </View>
                </View>
            }
          />
          <View style={styles.sectionHeaderView}>
            <Text style={styles.sectionHeader}>Popular TV Shows</Text>
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
                    source={require('../images/pose.png')} />
                  <View style={styles.premiumSub}>
                    <Premium />
                  </View>
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
                <View style={{ marginVertical: 5 }}>
                  <Image
                    style={styles.imageSection}
                    source={require('../images/wakeupsid.jpg')} />
                  <View style={styles.premiumSub}>
                    <Premium />
                  </View>
                </View>
            }
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  premium: {
    position: 'absolute',
    left: 10,
    top: 7
  },
  premiumSub: {
    position: 'absolute',
    left: 3,
    top: 0,
  },
  headTitle: {
    color: 'rgba(0,0,0,0)'
  },
  mainContainer: {
    flex: 1,
  },
  listView: {
    marginVertical: 10,
    height: 200,
  },
  listImage: {
    width: 375,
    height: '100%',
    marginHorizontal: 3,
    borderRadius: 6,
  },
  iconView: {
    position: 'absolute',
    bottom: '2%',
    left: '2%',
    flexDirection: 'row',
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sectionHeaderView: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
    justifyContent: 'space-between',
  },
  sectionHeader: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    left: 10,
  },
  sectionHeaderMore: {
    color: 'rgb(84, 161, 40)',
    right: 10
  },
  imageSection: {
    width: 120,
    height: 170,
    marginHorizontal: 3,
    borderRadius: 3
  },
});