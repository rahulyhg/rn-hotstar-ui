import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

export default class Privacy extends Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Privacy Policy</Text></View>,
    
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
                    // sourc={{ uri: 'https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint' }}
                source={{uri: 'https://secure-media.hotstar.com/static-pages/android/IN_privacy_policy.html'}}
                />
            </View>
        );
    }
}
