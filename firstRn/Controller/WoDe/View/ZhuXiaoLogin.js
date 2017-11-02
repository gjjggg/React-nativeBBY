/**
 * Created by guohongan on 2017/10/31.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,


} from 'react-native';

export default class WoDe extends Component {
    static defaultProps(){
        textStringName:React.PropTypes.string
        onPressText:React.PropTypes.object
    }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={this.props.onPressText}>
                <Text style={styles.leftTextStyle}>
                    {this.props.textStringName}
                </Text>
                <Image style={styles.rightImageStyle} source={require('../../../Image/Main/灰色引导.png')}/>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        //justifyContent: 'space-around',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height:40,
    },
    leftTextStyle: {
        //backgroundColor: '#45fcad',
        fontSize: 16,
        marginLeft: 10,
        color:'#a8a8a8'
    },
    rightImageStyle: {
        width:8,
        height:14,
        //backgroundColor:'#678eac',

        position:'absolute',
        right:10,
        top:(40-10)/2,

    }


});