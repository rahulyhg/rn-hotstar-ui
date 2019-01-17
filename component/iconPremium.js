import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class IconPremium extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={{backgroundColor:'rgb(84, 161, 40)',padding:2,borderRadius:2}}>
        <Text style={{color:'rgba(255,255,255,1)',fontSize:10,fontWeight:'bold'}}> PREMIUM </Text>
      </View>
    );
  }
}
