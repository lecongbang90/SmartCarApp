
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  StatusBar,
  View
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './src/components/home';
import Control from './src/components/control';
import Info from './src/components/info';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'control',
      ipaddress: '',
      port: '',
    };
  }
  setIpAddress(ipaddress, port) {
    this.setState({
      ipaddress,
      port
    })
  }
  render() {
    return (
      <View style={{flex:1}}>
      <StatusBar hidden = {true}/>
      <TabNavigator tabBarStyle={styles.TabNavigator}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() =>
            <Image source={require('./src/images/homeDark.png')} />}
          renderSelectedIcon={() =>
            <Image source={require('./src/images/homeGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home setIp={this.setIpAddress.bind(this)} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'control'}
          title="Control"
          renderIcon={() => <Image source={require('./src/images/controlDark.png')} />}
          renderSelectedIcon={() => <Image source={require('./src/images/controlGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'control' })}>
          <Control ipaddress={this.state.ipaddress}
                  port ={this.state.port} />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'info'}
          title="Info"
          renderIcon={() => <Image source={require('./src/images/infoDark.png')} />}
          renderSelectedIcon={() => <Image source={require('./src/images/infoGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'info' })} >
          <Info />
        </TabNavigator.Item>
      </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  TabNavigator: {
    height: 70,
  },
});
