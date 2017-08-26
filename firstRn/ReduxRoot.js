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
import AppRoot from './Base/APPRoot'
export default  class  ReduxRoot extends  Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            islogin:'0'
        };
    }
    componentDidMount() {
        this.subscription = DeviceEventEmitter.addListener('EventName',this._tongzhiLogin())
    }

    componentWillUnmount() {
        this.subscription.remove()
    }
    _tongzhiLogin=()=> {
        console.log('s232qwasdsdfdfdddfdd')
        this.setState({
            islogin:'1'
        })

    }
     render(){
         return(
             this.state.islogin === '0'?
             <Provider store={store}>
                 <Login />
             </Provider>
             :
             <Provider store={store}>
                 <AppRoot/>
             </Provider>

         )
     }
}


