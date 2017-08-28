/**
 * Created by guohongan on 2017/8/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    DeviceEventEmitter
} from 'react-native';
import {Provider} from 'react-redux'
import ConfigureStore from  './Redux/Store/ConfigureStore'
const  store = ConfigureStore()
import Login from './Controller/Login/LoginVC'

export default  class  ReduxRoot extends  Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            islogin:'0'
        };
    }

     render(){
         return(
             // this.state.islogin === '0'?
             <Provider store={store}>
                 <Login />
             </Provider>
             // :
             // <Provider store={store}>
             //     <AppRoot/>
             // </Provider>

         )
     }
}


