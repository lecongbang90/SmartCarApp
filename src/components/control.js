
import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Slider
} from 'react-native';

export default class Control extends Component {
    constructor(props) {
        super(props);
        this.state = {
            left: "",
            right: "",
            top: "",
            down: "",
            console: "",
            status: "",
            valueSlider: 0,
        }
    }
    LEFT() {
        console.log("left");
        return fetch("http://192.168.1.23/cmd/left"
            , {
                method: 'post',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson['cmd']);
                this.setState({
                    console: "Request: " + "left" + "   Response: " +
                        responseJson['cmd'] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                console.log("error");
                this.setState({

                    console: "Request: " + "left" + "   Response: NG" + "\n"
                        + this.state.console
                });
                return console.log("error");
            })

    }
    TOP() {
        console.log("top");
        fetch("http://192.168.1.23/cmd/top"
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
                    console: "Request: " + "top" + "   Response: " +
                        responseJson['cmd'] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + "top" + "   Response: NG" + "\n"
                        + this.state.console
                });
            })

    }
    DOWN() {
        console.log("down");
        fetch("http://192.168.1.23/cmd/down"
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
                    console: "Request: " + "down" + "   Response: " +
                        responseJson["cmd"] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + "down" + "   Response: NG" + "\n"
                        + this.state.console
                });
            })
    }
    RIGHT() {
        console.log("right");
        fetch("http://192.168.1.23/cmd/right"
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
                    console: "Request: " + "right" + "   Response: " +
                        responseJson["cmd"] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + "right" + "   Response: NG" + "\n"
                        + this.state.console
                });
            })
    }
    STOP() {
        console.log("stop");
        fetch("http://192.168.1.23/cmd/stop"
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
                    console: "Request: " + "stop" + "   Response: " +
                        responseJson["cmd"] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + "stop" + "   Response: NG" + "\n"
                        + this.state.console
                });
            })
    }
    sliderChange(val) {

        console.log(Number.parseInt(val));
        console.log("speed");
        return fetch("http://192.168.1.23/cmd/speed/" + Number.parseInt(val)
            , {
                method: 'post',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    cmd: 'cmd left',
                    speed: '199',
                  }),
            })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson['cmd']);
                this.setState({
                    console: "Request: " + "speed" + "   Response: " +
                        responseJson['cmd'] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                console.log("error");
                this.setState({

                    console: "Request: " + "speed" + "   Response: NG" + "\n"
                        + this.state.console
                });
                return console.log("error");
            })

    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.left}
                        onPress={() => { this.LEFT() }}>
                        <Text style = {{fontWeight: 'bold'}}>
                        LEFT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.top}
                        onPress={() => { this.TOP() }}>
                        <Text style = {{fontWeight: 'bold'}} >
                            TOP
                        </Text>
                    </TouchableOpacity>
                    <Slider style={{ flex: 1 , backgroundColor:"#b3d9ff"}}
                        maximumValue={100.00}
                        minimumValue={0.00}
                        value={this.state.valueSlider}
                        onValueChange={val => this.setState({ valueSlider: val })}
                        onSlidingComplete={val => this.sliderChange(val)}
                    ></Slider>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.console}
                        onPress={() => { this.TOP() }}>
                        <Text style={{ color: "white" }}>
                            CONSOLE:
                        </Text>
                        <Text style={{ color: "white" }}>
                            {this.state.console}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.stop}
                        onPress={() => { this.STOP() }}>
                        <Text style = {{fontWeight: 'bold'}}>
                            STOP
                        </Text>
                    </TouchableOpacity>
                    <View style = {{flex: 1 ,flexDirection: "row"}} >
                    <Text style={{ flex: 1 , backgroundColor:"blue"}}>
                    AUTO
                    </Text>
                    <Text style={{ flex: 1 , backgroundColor:"red"}}>
                     MANUAL
                    </Text>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.right}
                        onPress={() => { this.RIGHT() }}>
                        <Text style = {{fontWeight: 'bold'}} >RIGHT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.down}
                        onPress={() => { this.DOWN() }}>
                        <Text style = {{fontWeight: 'bold'}}>
                            DOWN
                        </Text>
                    </TouchableOpacity>
                    <Slider style={{ flex: 1 , backgroundColor:'yellow'}} 
                        maximumValue={100.00}
                        minimumValue={0.00}
                        value={this.state.valueSlider}
                        onValueChange={val => this.setState({ valueSlider: val })}
                        onSlidingComplete={val => this.sliderChange(val)}
                    ></Slider>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    left: {
        flex: 2,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
    },
    top: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    down: {
        flex: 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 2,
        backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    stop: {
        flex: 2,
        backgroundColor: '#c68c53',
        justifyContent: 'center',
        alignItems: 'center',
    },
    console: {
        flex: 2,
        backgroundColor: 'black',
    },
});
