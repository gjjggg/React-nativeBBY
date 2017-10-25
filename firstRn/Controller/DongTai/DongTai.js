/**
 * Created by guohongan on 2017/8/23.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActionSheetIOS,
    Image,
    SectionList
} from 'react-native';
import  { connect } from 'react-redux'
import NetWorking from '../../Tool/NetWorking'
import DongTaiCell from './View/DongTaiCell'
import DongTaiTop from  './View/DongTaiTop'
class DongTai extends Component {
    componentDidMount() {
    this._renderDownloadNetWorking()
    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            data:[],
        };
      }
    //网络请求
    _renderDownloadNetWorking(){
        const {weburl} = this.props.LoginReducer;
        const {xjid} = this.props.LoginReducer;
        const {xjflag} = this.props.LoginReducer;
        let homeCommentUrl;
        homeCommentUrl = `${weburl}:8000/app/app/j_2_6.aspx?xjid=${xjid}&xjflag=${xjflag}`
        console.log(homeCommentUrl)

        NetWorking.get(homeCommentUrl,(data)=>{
            console.log(data)
            if(data.Result === '1'){
                console.log(data.data)
                this.setState({
                    data: data.data,
                });

            }else{

            }

        },()=>{

        });

    }
   //表头
    _renturnlistheader(){
        return(
            // <View style={{width:SCREEN_WIDTH,height:20,padding:10,backgroundColor:'red'}}>
            //
            // </View>
            <DongTaiTop />
        )
    }

    //单元格
    _renturnItemComponent({item}){
        return(

            < DongTaiCell  smallData = {item}/>
        )
    }
    render() {
        return (
          <SectionList
              style={styles.container}
              //滑动默认false为滑动
              stickySectionHeadersEnabled ={false}
              ItemSeparatorComponent={()=><Text style={{marginTop:10,width:SCREEN_WIDTH,height:0.5,backgroundColor:'#d8d8d8'}}/>}
              // ListHeaderComponent={()=>this._renturnlistheader(Data)}
              renderSectionHeader={()=>this._renturnlistheader()}
              renderItem={this._renturnItemComponent}
              // keyExtractor={(item, index)=>`key-${item.id}`}
              sections={[{key: 's1', data:this.state.data}]}
          />
          //  <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        backgroundColor:'#f4f4f4',
        // width:SCREEN_WIDTH,
        // height:SCREEN_HEIGHT-64-44
    },
    list: {
        flex: 1,
        paddingTop: 54,
        paddingLeft: 16,
    },
    row: {
        flex: 1,
        padding: 8,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        borderBottomWidth: 1,
    },
    rowTitle: {
        fontSize: 14,
    },
    rowDescription: {
        fontSize: 12,
    },
});

export  default  connect((state) =>{
    const {LoginReducer,ReadFunReducer} = state;
    return {
        LoginReducer,
        ReadFunReducer
    };

},{})(DongTai)