/**
 * Created by guohongan on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image
} from 'react-native';

export default class SectionCell extends Component {
    static defaultProps(){
        Data:React.PropTypes.object
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    render() {
        return (
           <TouchableOpacity style={styles.container}>
               <Image style={styles.leftImageStyle} source={{uri:this.props.Data.imgurl}}/>
               <Text style={styles.topTextStyle} numberOfLines={3}>
                   {this.props.Data.title}
               </Text>
               <Text style={styles.bottomTexStyle} numberOfLines={1}>
                   {this.props.Data.date}
               </Text>

           </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft:0,
        marginTop:0,
        width:SCREEN_WIDTH,
        height:100,
        flexDirection:'row',
        backgroundColor:'#ffffff'
    },
   leftImageStyle: {
        marginTop:10,
       marginLeft:8,
       width:SCREEN_WIDTH/2.5,
       height:80,
       borderRadius:8,
       resizeMode:Image.resizeMode.stretch,

    },
    topTextStyle: {
        marginLeft:8,
        marginTop:10,
        width:SCREEN_WIDTH-24-SCREEN_WIDTH/2.5,
        color:'#1c1b20',
        fontSize:14,
    },
    bottomTexStyle:{

        position:'absolute',
        bottom:7,
        right:8,
        textAlign:'right',
        color:'#1c1b20',
        fontSize:13,







    }
});
