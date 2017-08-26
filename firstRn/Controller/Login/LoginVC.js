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
    TextInput,
    TouchableOpacity,

} from 'react-native';

import Prexfig from '../../Tool/Prexfig'
import Config from '../../Tool/Config'
import NetWorking from  '../../Tool/NetWorking'
import Mccvcvv from 'react-native-md5'
import {loginAction} from '../../Redux/Actions/LoginAction'
import  { connect } from 'react-redux'
import AppRoot from '../../Base/APPRoot'


const backImage = require('../../Image/Login/注册-.png')
const touXiang = require('../../Image/Login/头像.png')
const mima = require('../../Image/Login/锁.png')

 class LoginVC extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            passWord:React.PropTypes.object,
            userName:React.PropTypes.object,
        };
      }


    _renderLoginPress=()=>{

        this.props.loginAction('1866','202CB962AC59075B964B07152D234B70');

    }
    render() {


        return (
            <Image source={backImage}
                   style={styles.container}
            >
              <View style={styles.userNameView}>
                  <Image source={touXiang}
                         style={styles.userNameImage}
                  />
                  <TextInput style={styles.userNameText}/>
              </View>

              <View style={styles.userMiNaView}>
                  <Image  source={mima}
                          style={styles.userNameImage}/>
                  <TextInput style={styles.userNameText}/>

              </View>
              <TouchableOpacity style={styles.loginBtn} onPress={this._renderLoginPress}>
               <Text style={{color:'#ffffff'}}>
                  登录
               </Text>
              </TouchableOpacity>

               <Text style={styles.yonghuStyle} >
                   用户协议
               </Text>

            </Image>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
         alignItems: 'center',
        //backgroundColor: '#F5FCFF',
        resizeMode :Image.resizeMode.contain,
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT,
    },
    userNameView: {
        width:586/750*SCREEN_WIDTH,
        height:58/750*SCREEN_WIDTH,
        marginTop:670/750*SCREEN_WIDTH,
        backgroundColor:'#ffffff',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    userNameImage:{
        marginLeft:8,
        width:48/750*SCREEN_WIDTH,
        height:56/750*SCREEN_WIDTH,
        resizeMode:Image.resizeMode.contain
    },
    userNameText: {
       marginLeft:1,
       width:586/750*SCREEN_WIDTH-48/750*SCREEN_WIDTH-10,
       height:58/750*SCREEN_WIDTH,
       backgroundColor:'#ffffff',
       fontSize:13,

    },
    userMiNaView: {
        width:586/750*SCREEN_WIDTH,
        height:58/750*SCREEN_WIDTH,
        marginTop:35/750*SCREEN_WIDTH,
        backgroundColor:'#ffffff',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
    },
    loginBtn:{
        marginTop:40/750*SCREEN_WIDTH,
        width:345/750*SCREEN_WIDTH,
        height:58/750*SCREEN_WIDTH,
        backgroundColor: '#00c8ff',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',

    },
    yonghuStyle:{
        color:'#00c8ff',
        fontSize:13,
        backgroundColor:'#f0f0f0',
        marginTop:8

    }
});

export default connect((state)=>{
    const { loginAction } = state;
    return {
        loginAction
    }
},{ loginAction })(LoginVC)