import React, { Component } from 'react'
import { View, StyleSheet, Image, Text, Button ,StatusBar} from 'react-native'
import BottomNavigation, {
    IconTab,
    Badge,
    FullTab,
    ShiftingTab,
    
} from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from './header';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Home from './home';
import TV from './tv';
import Movies from './movies';
import Sports from './sports';
import News from './news';


export default class ItemList extends Component {

    static navigationOptions = {
        headerTitle: <Header />,
        
        headerStyle: {
            backgroundColor: 'rgb(84, 161, 40)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    state = {
        activeTab: 'home'
    }

    tabs = [
        {
            key: 'home',
            label: 'Home',
            barColor: '#fff',
            //   pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'home'
        },
        {
            key: 'tv',
            label: 'TV',
            barColor: '#fff',
            //   pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'youtube-tv'
        },
        {
            key: 'movies',
            label: 'Movies',
            barColor: '#fff',
            //   pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'movie'
        },
        {
            key: 'sports',
            label: 'Sports',
            barColor: '#fff',
            //   pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'basketball'
        },
        {
            key: 'news',
            label: 'News',
            barColor: '#fff',
            // pressColor: 'rgba(255, 255, 255, 0.16)',
            icon: 'newspaper'
        }
    ]

    state = {
        activeTab: this.tabs[0].key
    }

    renderIcon = icon => ({ isActive }) => (
        <Icon size={24} color={isActive ? 'rgb(84, 161, 40)' : 'rgba(0,0,0,0.5)'} name={icon} />
    )
    renderIconDrawer = icon => ({ isActive }) => (
        <Icon size={24} color='black' name={icon} />
    )

    renderTab = ({ tab, isActive }) => (
        <FullTab
            isActive={isActive}
            key={tab.key}
            animationDuration={50}
            label={tab.label}
            labelStyle={isActive ? styles.bottomBarLabelActive : styles.bottomBarLabel}
            renderIcon={this.renderIcon(tab.icon)}
            // animationEasing

        />
    )
    callScreen() {
        if (this.state.activeTab == 'home') {
            return (<Home />)
        }
        else if (this.state.activeTab == 'tv') {
            return (<TV />)
        }
        else if (this.state.activeTab == 'movies') {
            return (<Movies />)
        }
        else if (this.state.activeTab == 'sports') {
            return (<Sports />)
        }
        else{
            return (<News />)
        }
    }
    render() {
        return (
            
            <View style={{ flex: 1, backgroundColor: '#eeeeee' }}>
            <StatusBar
                hidden={true}
            />
            {this.callScreen()}
                <BottomNavigation
                    tabs={this.tabs}
                    activeTab={this.state.activeTab}
                    onTabPress={newTab => this.setState({ activeTab: newTab.key })}
                    renderTab={this.renderTab}
                />
            </View>
        )
    }
}





const styles = StyleSheet.create({


    button: {
        alignItems: 'center',
        backgroundColor: '#33C4B3',
        padding: 10,
        marginVertical: 5,
        borderRadius: 4,
        width: 100,
    },
    touchbleText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    bottomBarLabelActive: {
        color: 'rgb(84, 161, 40)',
    },
    bottomBarLabel: {
        color: 'rgba(0,0,0,0.5)',
    }
});