
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {setIp} from '../redux/action'
import { connect } from 'react-redux';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '1.2.3.4',
            port: '567',
            response: ' ',
            contect: 'Connect',
            number: 0,
        };

    }

    onPressButton = () => {
        this.setState({
            contect: this.state.contect === 'Disconnect' ? 'Connect' : 'Disconnect',
            response: this.state.contect === 'Disconnect' ? 'disonnect' : 'connect',
        });
    }
    
    setIpaddress(ip){
        this.props.setIp(ip);

    }


    render() {
        return (

            <View style={styles.home}>
                <TextInput
                    style={{ height: 40, width: 150 }}
                    placeholder="Ip address"
                    onChangeText={(ip) => {
                        this.setState({ ip });
                        this.setIpaddress(ip);
                    }}
                    value={this.state.ip}
                />
                <TextInput
                    style={{ height: 40, width: 150 }}
                    placeholder="Port"
                    onChangeText={(port) => {
                        this.setState({ port })
                        this.setIpaddress(port)
                    }}

                    value={this.state.port}
                />
                <TouchableOpacity onPress={this.onPressButton.bind(this)}>
                    <Text style={styles.connect}>
                        {this.state.contect}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.connect}>
                    Status: {this.state.response}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#83C75D',
    },
    text: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    connect: {
        fontSize: 20,
        color: '#511F90'
    }
});

export default connect(null, {setIp} )(Home);
