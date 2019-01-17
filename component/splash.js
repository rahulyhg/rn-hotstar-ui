import React, { Component } from 'react';
import { View, Text, Image ,StatusBar} from 'react-native';
import App from '../App';
export default class Splash extends Component {
  constructor() {
    super();
    this.state= {
      isVisible: true,
  }
}
  Hide_Splash_Screen = () => {

    this.setState({
      isVisible: false
    });

  }
  componentWillMount() {
    let that = this
    setTimeout(function () {
      that.Hide_Splash_Screen()
    }, 1500)
  }

  render() {
    let Splash_Screen = (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', backgroundColor: 'rgb(0,0,0)' }}>
      <StatusBar
                hidden={true}
            />
      <Image style={{ height: '30%', width: '60%', alignSelf: 'center' }} source={require('../images/hotstar.png')} />
      </View>
    )
    if(this.state.isVisible === true){
      return(Splash_Screen);
    }
    else{
      return(<App/>)
    }

  }
}
