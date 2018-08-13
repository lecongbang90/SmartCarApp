import { AppRegistry } from 'react-native';
import App from './App';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store'

export default class MyApp extends Component {

    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    };
}


AppRegistry.registerComponent('mycar', () => MyApp);
