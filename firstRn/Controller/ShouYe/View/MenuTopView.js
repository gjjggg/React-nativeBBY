/**
 * Created by guohongan on 2017/8/29.
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
import Config from '../../../Tool/Config'
export  default class MenuTopView extends Component {
    static defaultProps = {
        Data:React.PropTypes.object,
    }

    renderBigBuJiu(){
        //向上取整,有小数就整数部分加1
       // let page =   Math.ceil(this.props.Data.length/8)
      //  console.log(page);
        let  btnWidth  = (SCREEN_WIDTH-50)/4;
        let  btnHeight = (SCREEN_WIDTH-50)/4+25;
        let  margin = 10;

         let allChild = [];
         for( let i=0;i<this.props.Data.length;i++){

             let row = (i-8*parseInt(i/8)) %4;
             let loc = parseInt((i-8*parseInt(i/8))/4);
             let appviewx=margin+(margin+btnWidth)*row;
             let appviewy=margin+(margin+btnHeight)*loc;

            // (appviewx, appviewy+ scrollViewHeight+5,btnWidth,btnHeight)
             allChild.push(

             <View style={{position:'absolute',left:appviewx+parseInt(i/8)*SCREEN_WIDTH,top:appviewy,width:btnWidth,height:btnHeight,backgroundColor: 'red'}}>


             </View>


             )

         }
         return allChild;


    }

    render() {
//        let page =   Math.ceil(this.props.Data.length/8)

        return (
             <ScrollView  style={tiaomuTop.topcontainer}
                          horizontal={true}
                          scrollEnabled =  {true}
                 //横向滚动条隐藏
                          showsHorizontalScrollIndicator={false}
                          ioscontentOffset ={100,100}
                 //自动分页
                          pagingEnabled={true} >
                 {this.renderBigBuJiu()}

             </ScrollView>

        );
    }
}

const tiaomuTop = StyleSheet.create({
    topcontainer:{
        flexDirection:'row',
       width:SCREEN_WIDTH*3,
        flexWrap:'wrap',
        height:((SCREEN_WIDTH-50)/4+25)*2+40,
        marginLeft:0,
        marginTop:0,
        backgroundColor:'#3affea'


    },

});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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