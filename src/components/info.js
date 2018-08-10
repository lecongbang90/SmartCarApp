
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
    
} from 'react-native';


export default class Info extends Component {
    render() {
        return (
            <View style={styles.info}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                    Creator : Lê Công Bằng
                </Text>
                <Text style={{ fontSize: 14 }} >
                    Tel: +84974690374
                </Text>
                <Text style={{ fontSize: 14 }}>
                    E-mail: lcbangtv90@gmail.com
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    info: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb6d1'
        
    },
    info2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffb6d1'
        
    },

});
