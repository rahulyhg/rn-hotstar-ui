import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Downloads extends Component {
  static navigationOptions = {
    headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Downloads</Text></View>,

    headerStyle: {
        backgroundColor: 'rgb(84, 161, 40)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Empty </Text>
      </View>
    );
  }
}
