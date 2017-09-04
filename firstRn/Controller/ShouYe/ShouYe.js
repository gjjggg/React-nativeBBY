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
    SectionList

} from 'react-native';
import  { connect } from 'react-redux'
import MenuTopView from './View/MenuTopView'
import SectionCellItem from './View/SectionCell'
import NetWorking from '../../Tool/NetWorking'
import HomeNavgation from './View/HomeNavgation'
class ShouYe extends Component {
   static  defaultProps = {

   }
   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
           Data:[],
           artiddown:'0',
           artidup:'0',


       };
     }
    componentDidMount() {

        const {info} = this.props.ReadFunReducer;
        console.log(info)
        const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;
        this.props.navigation.setParams({
            title:info ? info[0].img : 'ssss',
            onPressImage:this._onPressImage

        });

        console.log(this.props.info)
        this._renderDownloadNetWorking()
    }

    _onPressImage = (navigation) => {
        // alert('点击headerLeft');

        console.log('点击headerLeft')
    }
    //导航条
    static  navigationOptions = ({navigation,screenProps})=>({
         header:(

            <HomeNavgation touxiangImage= {navigation.state.params?navigation.state.params.title:',,,'}
                           onPressImage = {()=>navigation.state.params.onPressImage(navigation)}

            />
         )
    });

    //网络请求
    _renderDownloadNetWorking(){
        const {weburl} = this.props.LoginReducer;
        const {artid} = this.props.LoginReducer;
        let homeCommentUrl = `${weburl}:8000/jk/bby_info.aspx?artid=${artid}&updownflag=${this.state.artidup}`
        NetWorking.get(homeCommentUrl,(data)=>{
            if(data.Result === '1'){
                this.setState({
                    Data: data.Data,
                    artidup: data.artidup,
                    artiddown:data.artiddown

                })

            }else{

            }

        },()=>{

        });

    }
    ///////布局
    _renturnItemComponent = ({item}) => {
        return (
          <SectionCellItem  Data={item}/>
        )

    }
    _renturnlistheader = (Data) => {
        return (
            <MenuTopView Data={Data}/>
        )
    }
    render() {
        const {Data} = this.props.ReadFunReducer;
        return (
            (Data == null || !Data)&& this.state.Data.length==0 ?
                <View style={styles.container}>

                </View> :
                // <View style={styles.container}>
                //
                // </View>
                <SectionList
                    style={styles.container}
                    //滑动默认false为滑动
                    stickySectionHeadersEnabled ={true}
                    ItemSeparatorComponent={()=><Text style={{width:SCREEN_WIDTH,height:0.5,backgroundColor:'#d8d8d8'}}/>}
                   // ListHeaderComponent={()=>this._renturnlistheader(Data)}
                    renderSectionHeader={()=>this._renturnlistheader(Data)}
                    renderItem={this._renturnItemComponent}
                   // keyExtractor={(item, index)=>`key-${item.id}`}
                    sections={[{key: 's1', data:this.state.Data}]}
                />
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
      //  flex: 1,
        backgroundColor: '#ffffff',
        width:SCREEN_WIDTH,
        height:SCREEN_HEIGHT
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