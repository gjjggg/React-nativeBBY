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
        onPressZhuXiao:React.PropTypes.object
    }

    render() {
        return (
           <View style={styles.container}>
               <View style={styles.topViewStyle}/>
               <TouchableOpacity style={styles.bottomViewStyle} onPress={this.props.onPressZhuXiao}>
                   <Text  onPress={this.props.onPressZhuXiao} style={styles.bottomTextStyle}>
                       注销
                   </Text>
               </TouchableOpacity>
           </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: SCREEN_WIDTH,
        height:100,
    },
    topViewStyle: {
        backgroundColor: '#f7f7f7',
        width:SCREEN_WIDTH,
        height:50,
    },
    bottomViewStyle: {
       width:SCREEN_WIDTH,
        height:50,
        fontSize:16,
        justifyContent:'center',
        alignItems:'center',

    },
    bottomTextStyle:{
        fontSize:17,
        color:'#a8a8a8',

    }


});