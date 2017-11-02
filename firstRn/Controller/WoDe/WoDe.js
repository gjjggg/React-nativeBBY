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
    SectionList

} from 'react-native';
import PuTongView from './View/PuTongView'
import  ShenFenView from  './View/ZhuXiaoLogin'
import  ZhuXiaoView from './View/ShenFen'
export default class WoDe extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:[]
        };
      }

     componentDidMount() {
         var mycars =['sss','修改密码','清理缓存','推送管理','功能介绍','关于我们','联系我们','问题反馈','注销登录']
         console.log('888888888888888888888888888888888888888888')
         console.log(mycars)
         this.setState({
            dataSource:mycars
         });

    }

    _renturnlistheader(){
        // source={require('../../Image/Login/头像.png')}
        return(
          <View style={styles.listheaderStyle}>
              <Image    style={styles.headerTopImageStyle} />
              <Image  source={require('../../Image/Main/设置弧度.png')} style={styles.headerBottomImageStyle} />
              <TouchableOpacity style={styles.headerMiddleImageStyle}>
                  <Image style={styles.middleaTouXiangImageStyle}/>
              </TouchableOpacity>

          </View>
        )
    }
    _renturnItemComponent({item,index}){
        console.log(item)
        console.log(index)
        let shen = ['园长','教师']
        if(index === 0 ){
            return(
              <PuTongView shenfenArr={shen}/>
            )
        }
        else if(item === '注销登录'){
            return(
               <ZhuXiaoView />
            )
        }
        else {

        return(
              <ShenFenView  textStringName ={item}/>
        )

        }
    }
    render() {

            return (
                <SectionList
                    style={styles.container}
                    //滑动默认false为滑动
                    stickySectionHeadersEnabled ={false}
                    ItemSeparatorComponent={()=><Text style={{width:SCREEN_WIDTH,height:0.5,backgroundColor:'#d8d8d8'}}/>}
                    // ListHeaderComponent={()=>this._renturnlistheader(Data)}
                    renderSectionHeader={()=>this._renturnlistheader()}
                    renderItem={this._renturnItemComponent}
                    // keyExtractor={(item, index)=>`key-${item.id}`}
                    sections={[{key: 's1', data:['sss','修改密码','清理缓存','推送管理','功能介绍','关于我们','联系我们','问题反馈','注销登录']}]}
                />
            );

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
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
    listheaderStyle:{
        width:SCREEN_WIDTH,
        height:240,
        backgroundColor:'#34ac3b'

    },
    headerTopImageStyle:{
        width:SCREEN_WIDTH,
        height:120,
        marginTop:0,
        backgroundColor:'#5476ac'
    },
    headerBottomImageStyle:{
        width:SCREEN_WIDTH,
        height:120,
        marginTop:0,
        //backgroundColor:'#812cea'
    },
    headerMiddleImageStyle:{
        width:60,
        height:60,
        position:'absolute',
        left:SCREEN_WIDTH/2-30,
        top:240/2-30,
        borderRadius:30,
    },
    middleaTouXiangImageStyle:{
        marginTop:0,
        marginLeft:0,
        width:60,
        height:60,
        backgroundColor:'#7acde5',
        resizeMode:Image.resizeMode.stretch

    },
    itemCellStyle:{
        marginTop:0,
        marginLeft:0,
        width:SCREEN_WIDTH,
        height:50,

    }
});
