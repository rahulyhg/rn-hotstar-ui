import React, { Component } from 'react';
import { StyleSheet, Text, View,  TextInput,  TouchableOpacity, AsyncStorage ,withNavigation } from 'react-native';
import ItemList from './ItemList';
export default class Logout extends React.Component {
  static navigationOptions = {
    headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Log Out</Text></View>,

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
    };

    render() {
        const { navigate } = this.props.navigation;

        //var {params} = this.props.navigation.state;
        return (
                <View style={{flex:1 ,backgroundColor: 'white' ,height:'100%'}}>
                   
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                  AsyncStorage.removeItem('email');
                                  alert('Logged Out');
                                  //('ItemList');
                                  this.forceUpdate()
                            }
                            }
                        >
                        <Text style={styles.touchbleText}>LOGOUT</Text>
                        </TouchableOpacity>

                          
                    </View>


                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginHorizontal: 40,
        height: '100%',
        width: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(84, 161, 40)',
        padding: 10,
        marginVertical: 5,
        borderRadius: 4
    },
    touchbleText:{
        color:'#fff',
        fontWeight: 'bold',
    },
});
