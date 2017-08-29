/**
 * Created by guohongan on 2017/8/23.
 */
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
    TouchableOpacity,
    ScrollView
} from 'react-native';
import  { connect } from 'react-redux'
import MenuTopView from './View/MenuTopView'
class ShouYe extends Component {
    render() {
        const {Data} = this.props.ReadFunReducer;


        return (
            Data == null||!Data?
            <View style={styles.container}>

            </View> :
             <View style={styles.container}>
                 <MenuTopView Data={Data} />
              </View>
        );
    }
}

const tiaomuTop = StyleSheet.create({
     topcontainer:{
        backgroundColor:'#ff6ad3',
        flexDirection:'row',

     },

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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

export  default  connect((state) =>{
    const {LoginReducer,ReadFunReducer} = state;
    return {
        LoginReducer,
        ReadFunReducer
    };

},{})(ShouYe)