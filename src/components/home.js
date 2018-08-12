
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ip: '1.2.3.4',
            port: '567',
            response: ' ',
            contect: 'Connect',
            number: 0,
            cmd: ''
        };
        this.timer = null;
        this.addOne = this.addOne.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    onPressButton = () => {
        this.setState({
            contect: this.state.contect === 'Disconnect' ? 'Connect' : 'Disconnect',
            response: this.state.contect === 'Disconnect' ? 'disonnect' : 'connect',
        });
    }
    addOne() {
        console.log('test1' + this.state.cmd);
        this.timer = setTimeout(this.addOne, 200);
        fetch("http://192.168.1.23/cmd/" + this.state.cmd
            , {
                method: 'post',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson['cmd']);
                this.setState({
                    console: "Request: " + 'cmd' + "   Response: " +
                        responseJson['cmd'] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + 'cmd' + "   Response: NG" + "\n"
                        + this.state.console
                });
            })
    }
    stopTimer() {
        clearTimeout(this.timer);
    }


    render() {
        return (

            <View style={styles.home}>
                <TextInput
                    style={{ height: 40, width: 150 }}
                    placeholder="Ip address"
                    onChangeText={(ip) => {
                        this.setState({ ip });
                        this.props.setIp(ip);
                    }}
                    value={this.state.ip}
                />
                <TextInput
                    style={{ height: 40, width: 150 }}
                    placeholder="Port"
                    onChangeText={(port) => {
                        this.setState({ port })
                        this.props.setIp(port)
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
                <TouchableOpacity
                    onPressIn={() => {
                        this.setState({ cmd: 'top' })
                        this.addOne()
                    }}
                    onPressOut={this.stopTimer}>
                    <Text style={styles.connect}>
                        Test
                </Text>
                </TouchableOpacity>
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
