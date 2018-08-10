import React, { Component } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default class Token extends Component {
  constructor(props) {
    super(props);
    this.state = {
      un: "0",
      pa: "",
      kq: "CHUA LOGIN",
      token: "..."
    }
  }

  LOGIN() {
    fetch("http://192.168.1.23/gpio/" + this.state.un
    , {
      method: 'get',
      dataType: 'json',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson['led_is']);
        this.setState({
          kq: responseJson["led_is"]
        });
      })
      

  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Text>LOGIN FORM</Text>
        </View>
        <View style={styles.box}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
            onChangeText={(un) => this.setState({ un })}
            placeholder="Username"
            value={this.state.un}
          />
        </View>
        <View style={styles.box}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 300 }}
            onChangeText={(pa) => this.setState({ pa })}
            placeholder="Password"
            value={this.state.pa}
          />
        </View>
        <View style={styles.box}>
          <TouchableOpacity onPress={() => { this.LOGIN() }}>
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}>
          <Text>{this.state.kq}</Text>
          <Text>{this.state.token}</Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "yellow", padding: 50 },
  box: { flex: 1, alignItems: "center", justifyContent: "center" },
  box2: { flex: 3, alignItems: "center", justifyContent: "center" },
});