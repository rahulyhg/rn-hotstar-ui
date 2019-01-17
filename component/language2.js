import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, FlatList } from 'react-native';

export default class componentName extends Component {
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
  constructor() {
    super();
    this.state = {
      data: ['Hindi', 'English', 'Gujarati', 'Bangla', 'Telugu', 'Malyalam', 'Kannad', 'Urdu', 'Punjabi', 'Marathi', 'Rajasthani'],
      index: 1,
    }
  }

  render() {
    return (
      <ScrollView
        contentContainerStyle={{ flexWrap: 'nowrap', paddingTop: 10 }}
        showsVerticalScrollIndicator={false}
      >

        <FlatList
          extraData={this.state.index}
          data={this.state.data}
          keyExtractor={(x, i) => i.toString()}
          // horizontal={true}
          showsVerticalScrollIndicator={false}

          renderItem={
            ({ item, index }) =>
              <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.imageSection}
                    source={require('../images/hindi.jpg')} />
                  <Text style={styles.imageText}>{item}</Text>
                </View>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.imageSection}
                    source={require('../images/hindi.jpg')} />
                  <Text style={styles.imageText}>{item}</Text>
                </View>

              </View>
          }
        />

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingHorizontal: 5,
    paddingVertical: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imageContainer: {
    height: 102,
    width: '47%',
    marginHorizontal: 5,
    backgroundColor: 'white',
    elevation: 2,

  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 6,
  },
  imageText: {
    position: 'absolute',
    alignSelf: 'center',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    top: '40%'

  }
})