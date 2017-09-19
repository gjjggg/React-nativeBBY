/**
 * Created by guohongan on 2017/9/19.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class DongTaiTop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image  style={styles.container} source={{uri:'chird'}}/>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        width:SCREEN_WIDTH,
        height:150,
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
});
