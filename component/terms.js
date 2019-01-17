import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';

export default class Terms extends Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Terms of Use</Text></View>,
    
        headerStyle: {
          backgroundColor: 'rgb(84, 161, 40)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }

  render() {
    return (
      <View style={{flex:1}}>
        <WebView
            source={{uri: 'https://secure-media.hotstar.com/static-pages/android/IN_terms.html'}}
        />
      </View>
    );
  }
}
