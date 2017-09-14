/**
 * Created by guohongan on 2017/9/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class DongTaiCell extends Component {

    static  defaultProps ={
          smallData:{}


    }

    _renderAllImageView=()=>{

        const  allData = [];





    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.imageTopView}/>
                    <Text style={styles.titleTextTop}>

                    </Text>
                    <Text style={styles.dateTitle}>

                    </Text>
                </View>
                <Text style={styles.muleTitle}>
                  时代峰峻打工皇帝放假换个地方话费打个电话发过的发几个淡饭黄齑个地方个地方换个地方换个
                </Text>
                <View style={styles.allImageView}>
                    {this._renderAllImageView()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
    },
    topView: {
       flexDirection:'row',
       alignItems:'center',
       width:SCREEN_WIDTH,
       height: 80,
       backgroundColor:'#ac670a'

    },
    imageTopView: {
        marginTop:20,
       marginLeft:20,
       width:50,
       height:50,
       borderRadius:50/2,
       backgroundColor:'#1c204b'
    },
    titleTextTop:{
        marginTop:20,
        marginLeft:8,
        fontSize:18,
        color:'#1c1b20',
    },
    dateTitle:{
      position:'absolute',
      bottom:10,
      left:78,
      color:'#1c1b20',

    },
    muleTitle:{
       marginTop:8,
       marginLeft:8,
       width:SCREEN_WIDTH-16,
       backgroundColor:'#2bcc4a',
    },
    allImageView:{
     backgroundColor:'#2c4b79',
     width:SCREEN_WIDTH,

    }
});
