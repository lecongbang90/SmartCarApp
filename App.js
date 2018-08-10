
import React, { Component } from 'react';
import {
  StyleSheet,
  Image
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
    };
  }
  render() {
    return (
      <TabNavigator tabBarStyle={styles.TabNavigator}>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="Home"
          renderIcon={() => 
          <Image source={require('./src/images/homeDark.png')} />}
          renderSelectedIcon={() => 
          <Image source={require('./src/images/homeGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'home' })}>
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'control'}
          title="Control"
          renderIcon={() => <Image source={require('./src/images/controlDark.png')} />}
          renderSelectedIcon={() => <Image source={require('./src/images/controlGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'control' })}>
          <Control />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'info'}
          title="Info"
          renderIcon={() => <Image source={require('./src/images/infoDark.png')} />}
          renderSelectedIcon={() => <Image source={ require('./src/images/infoGreen.png')} />}
          onPress={() => this.setState({ selectedTab: 'info' })} >
          <Info />
        </TabNavigator.Item>
      </TabNavigator>
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
