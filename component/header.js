import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Font from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
class Header extends Component {

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.header}>

                <TouchableOpacity
                style={{flex:1,height:48,justifyContent:'center'}}
                    onPress={() => this.props.navigation.toggleDrawer()}
                >
                    <Font
                        style={styles.bars} size={20} color='white' name='bars'
                    />
                </TouchableOpacity>

                <Text style={styles.headerText}>hotstar</Text>

                <TouchableOpacity
                style={{flex:1,height:48,justifyContent:'center'}}
                    onPress={() => navigate('Search')}
                >
                    <Font
                        style={styles.search} size={18} color='white' name='search' />
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // height:48
    },
    headerText: {
        color: 'rgba(255,255,255,1)',
        fontWeight: 'bold',
        fontSize: 26,
        marginLeft: 5,
        flex: 8,
    },
    bars: {
        paddingHorizontal: 10,
        alignSelf: 'center',
    },
    search:{
        paddingHorizontal:10,
        alignSelf: 'center',
    }
})
export default withNavigation(Header);