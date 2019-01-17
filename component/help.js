import React, { Component } from 'react';
import { View, Text,WebView } from 'react-native';

export default class Help extends Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>FAQ</Text></View>,
    
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
            source={{uri: 'https://secure-media.hotstar.com/static-pages/android/IN_faq.html'}}
        />
      </View>
    );
  }
}
