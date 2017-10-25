/**
 * Created by guohongan on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import  DeviceInfo from  'react-native-device-info'

export default class HomeNavgation extends Component {
    static defaultProps(){
        touxiangImage:React.PropTypes.string
        onPressImage:React.PropTypes.object

    }


    render() {
        console.log('2222222'+this.props.touxiangImage)
        return (
           <Image source={require('../../../Image/NavBar/head.png')} style={[styles.container,{height:(DeviceInfo.getModel()=== 'iPhone X'?88:64)}]}>
              <View style={[styles.smallNav,{marginTop:(DeviceInfo.getModel()=== 'iPhone X'?44:20)}]}>
               <TouchableOpacity style={styles.onPressStyle} onPress={this.props.onPressImage}>
                   <Image style={styles.touxiangStyle} source={{uri:this.props.touxiangImage}}/>
               </TouchableOpacity>
                   <Text style={styles.textTitleStyle}>
                       我的校园
                   </Text>

              </View>
           </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft:0,
        marginTop:0,
        width:SCREEN_WIDTH,
        height:64,
        backgroundColor:'#00c8ff',
        resizeMode:Image.resizeMode.contain
    },
    smallNav:{
        marginTop:20,
        marginLeft:0,
        width:SCREEN_WIDTH,
        height:44,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    onPressStyle:{
        position:'absolute',
        left:20,
        width:36,
        height:36,
        backgroundColor:'#f7f7f7',
        borderRadius:36/2,
    },
    touxiangStyle:{
        marginTop:0,
        marginLeft:0,
        width:36,
        height:36,
        color:'#ffffff',
        borderRadius:36/2,
        resizeMode :Image.resizeMode.stretch,

    },
    textTitleStyle:{
        fontSize:18,
        color:'#ffffff'
    }

});
