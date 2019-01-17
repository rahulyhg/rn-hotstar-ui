import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, AsyncStorage } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default class drawer extends Component {
    constructor() {
        super();
        this.state = {
            loggedIn: '',
        }

    }
    componentWillMount() {
        AsyncStorage.getItem('email').then((value) => this.setState({ loggedIn: value }))
    }
    componentWillReceiveProps() {
        AsyncStorage.getItem('email').then((value) => this.setState({ loggedIn: value }))
    }
    navigateToScreen = (route) => (
        () => {
            const navigateAction = NavigationActions.navigate({
                routeName: route
            });
            this.props.navigation.dispatch(navigateAction);
        })

    render() {
        // alert(this.state.loggedIn)
        return (
            <View style={styles.container}>
                {/* {this.forceUpdate()} */}
                {(this.state.loggedIn == null) ?

                    <View style={styles.headerContainer}>
                        {/* {AsyncStorage.getItem('email').then((value) =>this.setState({ loggedIn: value }))} */}
                        <TouchableOpacity
                            activeOpacity={0.3}
                            style={styles.touchHeader}
                            onPress={this.navigateToScreen('Login')}
                        >
                            <View style={{ flex: 7, flexDirection: 'column', marginLeft: 15 }}>
                                <Text style={styles.headerText}>Log In to your Hotstar Account</Text>
                                <Text style={styles.headerTextSub}>Sync your profile across devices</Text>
                            </View>
                            <View style={{ flex: 1, position: 'absolute', right: 15 }}>
                                <Icon size={20} color="white" name="ios-arrow-forward-outline" />

                            </View>
                        </TouchableOpacity>
                    </View>
                    : <View style={styles.headerContainer}>
                        <View
                            activeOpacity={0.3}
                            style={styles.touchHeader}
                        // onPress={this.navigateToScreen('Logout')}
                        >
                            <View style={{ flex: 2, flexDirection: 'column', marginLeft: 15 }}>
                                <Icon2 size={60} color="white" name="user-circle" />
                            </View>
                            <View style={{ flex: 6, flexDirection: 'column', marginLeft: 15 }}>
                                <Text style={styles.headerText}>{this.state.loggedIn}</Text>
                            </View>
                            <TouchableOpacity style={{ flex: 1, position: 'absolute', right: 15 }}
                                onPress={() => {
                                    AsyncStorage.removeItem('email').then(alert('Logged Out'))
                                    this.setState({ loggedIn: null })
                                    this.forceUpdate()

                                }}
                            >
                                <View >
                                    <Font size={30} color="white" name="logout" />

                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>}

                <View style={{ width: '100%', height: '85%', backgroundColor: "#EEEEEE" }}>
                    <ScrollView>
                        <View style={styles.sectionA}>
                            <View style={[styles.screenStyle, { flexDirection: 'row' }]}>
                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={styles.touchItems}
                                    onPress={this.navigateToScreen('Downloads')}
                                >
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Icon style={{ flex: 1 }} size={24} color="grey" name="md-download" />
                                        <Text style={[styles.screenTextStyle, { flex: 4 }]}  >My Downloads</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={[styles.screenStyle, { flexDirection: 'row' }]}>
                                <TouchableOpacity
                                    activeOpacity={0.3}
                                    style={styles.touchItems}
                                    onPress={this.navigateToScreen('Watchlist')}
                                >
                                    <View style={{ flex: 1, flexDirection: 'row' }}>
                                        <Font style={{ flex: 1 }} size={24} color="grey" name="playlist-plus" />
                                        <Text style={[styles.screenTextStyle, { flex: 4 }]}  >My Watchlist</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.sectionB}>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Premium')}
                            >
                                <Text style={styles.screenTextStyle} >Premium</Text>
                            </TouchableOpacity><TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Channels')}
                            >
                                <Text style={styles.screenTextStyle} >Channels</Text>
                            </TouchableOpacity><TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Language')}
                            >
                                <Text style={styles.screenTextStyle} >Language</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Genres')}
                            >
                                <Text style={styles.screenTextStyle} >Genres</Text>
                            </TouchableOpacity>
                    
                        </View>
                        <View style={styles.sectionC}>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Help')}
                            >
                                <Text style={styles.screenTextStyle} >Help</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Terms')}
                            >
                                <Text style={styles.screenTextStyle} >Terms of Use</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                activeOpacity={0.3}
                                style={styles.screenStyle}
                                onPress={this.navigateToScreen('Privacy')}
                            >
                                <Text style={styles.screenTextStyle} >Privacy Policy</Text>
                            </TouchableOpacity>
                            <View style={styles.screenStyle}>
                                <Text style={{ fontSize: 10, color: 'rgba(0,0,0,0.7)' }}>v7.2.3</Text>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
    },
    headerContainer: {
        width: '100%',
        height: '16%',
        backgroundColor: 'rgb(84, 161, 40)',
        justifyContent: 'center',
        alignItems: 'center'

    },
    touchHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'

    },
    headerText: {
        color: '#fff8f8',
        fontSize: 16,
        alignSelf: 'flex-start',
    },
    headerTextSub: {
        color: '#fff8f8',
        alignSelf: 'flex-start',
    },
    screenContainer: {
        paddingTop: 20
    },
    screenStyle: {
        // height: 30,
        paddingVertical: 15,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'

    },
    touchItems: {
        flexDirection: 'row',
    },
    screenTextStyle: {
        fontSize: 16,
        // marginLeft: 20
        color: 'black',
        width: '100%'
    },
    sectionA: {
        width: '100%',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // paddingLeft: 20,

    },
    sectionB: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: "rgba(0,0,0,0.1)",
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // paddingLeft: '20',

    },
    sectionC: {
        width: '100%',

        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        // position:'absolute',
        // paddingLeft: '20',
    },
});