import React, { Component } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
export default class Login extends React.Component {
    static navigationOptions = {
        headerTitle: <View><Text style={{ color: 'rgba(255,255,255,1)', fontSize: 20, fontWeight: 'bold' }}>Log In</Text></View>,

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
            password: '',
            email: '',
            color: 'white',
        }
    };

    render() {
        const { navigate } = this.props.navigation;

        //var {params} = this.props.navigation.state;
        return (

            <View style={{ flex: 1, backgroundColor: this.state.color, height: '100%' }}>

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <Text style={{ marginBottom: 30, fontSize: 30, alignSelf: 'center' }}> Log In </Text>
                    {/* <View style={{ paddingHorizontal: 20, height: '100%', justifyContent: 'center' }}> */}


                    <TextInput
                        style={{ height: 40, paddingHorizontal: 10 }}
                        keyboardType="email-address"
                        placeholder="Username"
                        autoFocus={true}
                        placeholderTextColor="#555"
                        onChangeText={(email) => this.setState({ email })}
                    />
                    <TextInput
                        style={{ height: 40, paddingHorizontal: 10 }}
                        keyboardType="visible-password"
                        placeholder="Password"
                        placeholderTextColor="#555"
                        onChangeText={(password) => this.setState({ password })}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            if (this.state.email == '' || this.state.password == '')
                                alert("Please fill all detail !!");
                            else {
                                AsyncStorage.setItem('email', this.state.email).then(() => {
                                    alert('Logged In');
                                    this.props.navigation.goBack();
                                })

                            }
                        }
                        }
                    >
                        <Text style={styles.touchbleText}>LOGIN</Text>
                    </TouchableOpacity>


                </KeyboardAvoidingView>


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
    touchbleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});