
import React, { Component } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Slider,
    Image,
    Button
} from 'react-native';
import { connect } from 'react-redux';

class Control extends Component {
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
            cmd: '',
        }
        this.timer = null;
        this.addCmd = this.addCmd.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }
    addCmd(cmd = this.state.cmd) {
        
        console.log('http://' + this.props.ipValue + '/cmd/' + cmd);
        this.setState({
            console: ' Request: ' + 'http://' + this.props.ipValue + '/cmd/' + cmd + "\n"
                + this.state.console
        });
        if (cmd !== 'stop' && cmd.substr(0, 5) !== 'speed')
            this.timer = setTimeout(this.addCmd, 200);

        fetch('http://' + this.props.ipValue + '/cmd/' + cmd
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
                    console: "   Response: " +
                        responseJson['cmd'] + "\n"
                        + this.state.console
                });
            }
            ).catch((e) => {
                this.setState({
                    console: "Request: " + cmd + "   Response: NG" + "\n"
                        + this.state.console
                });
            })
    }
    stopTimer() {
        clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: 'black'}}>
            <View style={{ flex: 1, flexDirection: "row", backgroundColor: '#babcc0', borderRadius: 20}}>
            {/* <View style={{ flex: 1,  backgroundColor: '#babcc0'
                
                }}>
            <Slider 
                    style={styles.slider}
                    trackStyle={customStyles2.track}
                    thumbStyle={customStyles2.thumb}
                    maximumValue={100.00}
                    minimumValue={0.00}
                    value={this.state.valueSlider}
                    onValueChange={val => this.setState({ valueSlider: val })}
                    onSlidingComplete={val =>
                        this.setState({ cmd: 'speed/' + Number.parseInt(val) },
                            () => this.addCmd(this.state.cmd))}
                ></Slider>
            </View> */}
            

            
                <View style={{ flex: 4 }}>
                    <TouchableOpacity style={styles.left}
                        onPressIn={() => {
                            this.setState({ cmd: 'left' }, () => this.addCmd(this.state.cmd))
                        }}
                        onPressOut={this.stopTimer}>
                        <Image source={require('../images/left.png')}
                        />
                        <Text style={{ fontWeight: 'bold' }} >
                            LEFT
                        </Text>
                        {/* <Image source={require('../images/left.png')} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.top}
                        onPressIn={() => {
                            this.setState({ cmd: 'top' }, () => this.addCmd(this.state.cmd))

                        }}
                        onPressOut={this.stopTimer}>
                        <Image source={require('../images/up.png')} />
                        <Text style={{ fontWeight: 'bold' }} >
                            UP
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 5 }}>
                    <View style={styles.console}>
                        <Text style={{ color: "white" }}>
                            CONSOLE:
                        </Text>
                        <Text style={{ color: "white" }}>
                            {this.state.console}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.stop}
                        onPressIn={() => {
                            this.setState({ cmd: 'stop' }, () => this.addCmd(this.state.cmd))
                        }}
                        onPressOut={this.stopTimer}>
                        <Image source={require('../images/stop.png')} />
                        <Text style={{ fontWeight: 'bold' }}>
                            STOP
                        </Text>
                    </TouchableOpacity>
                    <View style={{
                        flex: 1, flexDirection: "row"
                        , justifyContent: "center",
                        alignItems: "center",
                        margin: 40
                    }} >
                        <Button
                            onPress={()=>{}}
                            title="Learn More"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        <Button
                            onPress={()=>{}}
                            
                            title="Learn More"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                        {/* <Text style={{ flex: 1, backgroundColor: "blue" }}>
                            AUTO
                    </Text>
                        <Text style={{ flex: 1, backgroundColor: "red" }}>
                            MANUAL
                    </Text> */}
                    </View>
                </View>
                <View style={{ flex: 4 }}>
                    <TouchableOpacity style={styles.right}
                        onPressIn={() => {
                            this.setState({ cmd: 'right' }, () => this.addCmd(this.state.cmd))
                        }}
                        onPressOut={this.stopTimer}>
                        <Image source={require('../images/right.png')} />
                        <Text style={{ fontWeight: 'bold' }} >RIGHT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.down}
                        onPressIn={(down) => {
                            this.setState({ cmd: 'down' }, () => this.addCmd(this.state.cmd))
                        }}
                        onPressOut={this.stopTimer}>
                        <Image source={require('../images/down.png')} />
                        <Text style={{ fontWeight: 'bold' }}>
                            DOWN
                        </Text>
                    </TouchableOpacity>
                </View >
                {/* <View style={{ flex: 1,   backgroundColor: '#babcc0', }}>
                <Slider 
                    style={styles.slider}
                    // trackStyle={customStyles2.track}
                    // thumbStyle={customStyles2.thumb}
                    
                    maximumValue={100.00}
                    minimumValue={0.00}
                    value={this.state.valueSlider}
                    onValueChange={val => this.setState({ valueSlider: val })}
                    onSlidingComplete={val =>
                        this.setState({ cmd: 'speed/' + Number.parseInt(val) },
                            () => this.addCmd(this.state.cmd))}
                ></Slider>
                </View> */}
            </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    left: {
        flex: 2,
        // backgroundColor: '#babcc0',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    top: {
        flex: 2,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    down: {
        flex: 2,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    right: {
        flex: 2,
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    stop: {
        flex: 3,
        // backgroundColor: '#c68c53',
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth:1
    },
    console: {
        flex: 3,
        backgroundColor: 'black',
        
    },
    slider: {
        marginRight: -100,
        marginLeft: -100,
        // width: 250,
        // height: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1, 
        transform: [
            { rotateZ: '-90deg' },
        ],
        backgroundColor: '#babcc0'
    },
    track: {
        // height: 10,
        // borderRadius: 5,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumb: {
        // width: 10,
        // height: 30,
        // borderRadius: 5,
        backgroundColor: '#eb6e1b',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
var customStyles2 = StyleSheet.create({
    track: {
        height: 4,
        borderRadius: 2,
    },
    thumb: {
        width: 10,
        height: 10,
        borderRadius: 30 / 2,
        backgroundColor: 'white',
        borderColor: '#30a935',
        borderWidth: 2,
    }
});
function mapStateToProps(state){
    return{
        ipValue: state.ip
    };
}

export default connect(mapStateToProps)(Control);