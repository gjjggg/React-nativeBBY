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
        shenfenArr:React.PropTypes.object;
        onPressImage:React.PropTypes.object
    }
   _renderOnPress(){
       let bujuShengFenArr = [];
       for(var i=0;i<this.props.shenfenArr.length;i++){
          // let shenFenString =  []
           bujuShengFenArr.push(
           <TouchableOpacity style={cellStyles.backJiaoShiStyle} onPress={this.props.onPressImage}>
               <Text style={cellStyles.leftTextCellStyle}>
                   {this.props.shenfenArr[i]}
               </Text>
               <Image style={cellStyles.rightImageStyle} source={require('../../../Image/Main/不选择.png')}/>
           </TouchableOpacity>
           )
       }
       return bujuShengFenArr


   }

    render() {
        return (
            <View style={cellStyles.cellViewStyles}>
                {this._renderOnPress()}
            </View>
        );
    }
}
const cellStyles = StyleSheet.create({
    cellViewStyles:{
        width:SCREEN_WIDTH,
        height:60,
        backgroundColor:'#ffffff',
        flexDirection:'row',

    },
    topViewStyles:{
      width:SCREEN_WIDTH,
        height:10,
        backgroundColor:'#f7f7f7'

    },
    backJiaoShiStyle:{
        width:80,
        //height:60,
        marginTop:0,
        //backgroundColor:'#35def2',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center',

    },
    leftTextCellStyle:{
        marginLeft:0,
        color:'#a8a8a8',
        fontSize:16,
    },
    rightImageStyle:{
        marginLeft:8,
        width:20,
        height:20,
       // backgroundColor:'#acb43a',

    }

})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});