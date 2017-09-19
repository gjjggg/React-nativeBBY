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
        let  btnWidth;
        let  btnHeight;
        let  margin;
        let count;
        let littleCount;
        margin = 10;
        count = 4;
        if (count<3){
           littleCount = count;
        }else {
            littleCount = 3
        }
        btnWidth = (SCREEN_WIDTH-10*(littleCount+1))/littleCount;
        btnHeight= btnWidth*0.65;
        for(let i=0;i<count;i++){
            let row = i %littleCount;
            let loc = parseInt(i/littleCount);
            let appviewx=margin+(margin+btnWidth)*row;
            let appviewy=margin+(margin+btnHeight)*loc;
            allData.push(
                <Image
                  style={{marginTop:5,marginLeft: 10,width:btnWidth,height:btnHeight,backgroundColor:'#1c2c44'}} source={{uri:'家园共育'}}
                />
            )
        }

       return allData;



    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.imageTopView}/>
                    <Text style={styles.titleTextTop}>
                        刘全女女女女女
                    </Text>
                    <Text style={styles.dateTitle}>
                      2017-09-08
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
        backgroundColor: 'white',
    },
    topView: {
       flexDirection:'row',
       alignItems:'center',
       width:SCREEN_WIDTH,

       //backgroundColor:'#ac670a'

    },
    imageTopView: {
        marginTop:6,
       marginLeft:12,
       width:40,
       height:40,
       borderRadius:40/2,
       backgroundColor:'#1c204b'
    },
    titleTextTop:{
        position:'absolute',
        top:12,
        left:60,
        fontSize:13,
        color:'#1c1b20',
    },
    dateTitle:{
      position:'absolute',
      top: 28,
      left:60,
      fontSize:12,
      color:'#858585',

    },
    muleTitle:{
       marginTop:6,
       marginLeft:12,
       width:SCREEN_WIDTH-24,
        fontSize:13,
       //backgroundColor:'#2bcc4a',
    },
    allImageView:{
     //backgroundColor:'#2c4b79',
     width:SCREEN_WIDTH,
     flexDirection:'row',
     flexWrap:'wrap'


    }
});
