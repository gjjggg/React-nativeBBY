/**
 * Created by guohongan on 2017/8/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Provider} from 'react-redux'
import ConfigureStore from  './Redux/Store/ConfigureStore'
const  store = ConfigureStore()
import Login from './Controller/Login/LoginVC'
import AppRoot from './Base/APPRoot'
export default  class  ReduxRoot extends  Component{
     render(){
         return(
             <Provider store={store}>
                 <Login />
             </Provider>

         )
     }
}


