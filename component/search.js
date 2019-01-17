import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Font from 'react-native-vector-icons/FontAwesome';
export default class componentName extends Component {
    static navigationOptions = {
        header: null,
    };
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#EEEEEE" }}>
                <View
                    style={{
                        backgroundColor: 'white',
                        elevation: 2,
                        height: 48,
                        paddingHorizontal:12,
                        flexDirection: 'row',
                        margin: 8,
                        top: 0,
                        borderRadius: 3,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <TouchableOpacity 
                        onPress={()=>this.props.navigation.goBack()}
                    >
                        <Icon name="arrow-left" size={24} color="rgba(0,0,0,0.6)" />
                    </TouchableOpacity>
                    <TextInput
                        autoFocus={true}
                        placeholder='Search'
                        fontSize={20}
                        style={{ alignSelf: 'flex-start', flex: 7 }}
                        // caretHidden={true}
                        onChangeText={(value) => this.setState({ search: value })}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        onPress={()=>alert('Search will be available soon!')}
                    >
                    <Font name="search" size={20} color="rgba(0,0,0,0.5)" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
