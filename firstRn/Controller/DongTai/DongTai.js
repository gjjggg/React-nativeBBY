/**
 * Created by guohongan on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActionSheetIOS,
    Image,
} from 'react-native';
export default class DongTai extends Component {


    render() {
        return (
            <PhotoBrowser style={styles.container}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    list: {
        flex: 1,
        paddingTop: 54,
        paddingLeft: 16,
    },
    row: {
        flex: 1,
        padding: 8,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    rowTitle: {
        fontSize: 14,
    },
    rowDescription: {
        fontSize: 12,
    },
});
