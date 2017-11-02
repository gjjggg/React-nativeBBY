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
    SectionList,
    Alert,
    Platform

} from 'react-native';
import  { connect } from 'react-redux'
import ImagePicker  from  'react-native-image-crop-picker'
//import ImageCropPick from  'react-native-image-crop-picker'
import MenuTopView from './View/MenuTopView'
import SectionCellItem from './View/SectionCell'
import NetWorking from '../../Tool/NetWorking'
import HomeNavgation from './View/HomeNavgation'

let dataToPost = [];

//图片选择器参数设置
var options = {
    title: '是否更换头像',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'相册图片',
    customButtons: [
        {name: 'hangge', title: 'hangge.com图片'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class ShouYe extends Component {
   static  defaultProps(){

   }
   // 构造
     constructor(props) {
       super(props);
       // 初始状态
       this.state = {
           Data:[],
           artiddown:'0',
           artidup:'0',
           imageObject:React.PropTypes.object,
           imagesPath:React.PropTypes.string,


       };
     }
    componentDidMount() {

        const {info} = this.props.ReadFunReducer;
        console.log(info)
        const { dispatch,goBack,navigate,setParams,state } = this.props.navigation;
        this.state.imagesPath  ?
            this.props.navigation.setParams({
                //title:info ? info[0].img : 'ssss',
                onPressImage:this._onPressImage,
                title:this.state.imagesPath?this.state.imagesPath:info[0].img

            })
            : this.props.navigation.setParams({
            //title:info ? info[0].img : 'ssss',
            onPressImage:this._onPressImage,
            title:info?this.state.imagesPath:info[0].img

        })

        console.log(this.props.info)
        this._renderDownloadNetWorking()
    }

    //从相机获取图片
    pickSingleWithCamera() {
        ImagePicker.openCamera({
            cropping: false,
            width: Math.round((Dimensions.get('window').width-20)),
            height: 300,
        }).then(image => {
            dataToPost.push({
                uri: image.path,
                width: image.width,
                height: image.height,
                sourceURL:image.sourceURL,
            });
            this.setState({
                images: image,
                imagesPath:image.path
            });
        }).catch(
            e => alert(e)
        );
    }

    //从图库或者相机进行获取,因为安卓平台不能进行多图选择，所以，需要区分不同平台
    openPicLib() {
        if(Platform.OS === 'ios'){
            ImagePicker.openPicker({
               //  multiple: true,
                cropping: true,
                showsSelectedCount:true,
                waitAnimationEnd: false,
                //maxFiles:1
            }).then(image => {
                this.setState({
                    images: image,
                    imagesPath:image.path
                });
            }).catch(e =>
            { console.log('ssssssssdsdsdsdsds')}

            );

        }else{
            ImagePicker.openPicker({
                width: 300,
                height: 300,
                cropping: false,
                cropperCircleOverlay: false,
                compressImageMaxWidth: 480,
                compressImageMaxHeight: 640,
                compressImageQuality: 0.5,
                mediaType: 'photo',
                compressVideoPreset: 'MediumQuality'
            }).then(image => {
                dataToPost.push({
                    uri: image.path,
                    width: image.width,
                    height: image.height,
                    mime: image.mime
                });
                this.setState({
                    images: dataToPost
                });
            }).catch(e => {
                Alert.alert(e.message
                    ? e.message
                    : e);
            });
        }
    }

    //左上角更换头像的点击事件
    _onPressImage = (navigation) => {
        Alert.alert('温馨提示','是否更换头像',
            [
            { text:'拍照上传', onPress:()=> this.openPicLib()},
            {text:'相册选取',onPress: () => this.pickSingleWithCamera()},
            {text:'取消'}
            ]
        )
    }
    //菜单按钮的点击事件
    _renderTopView({index,data}){

        const dic = data[index]
        console.log(dic)
        // if(dic.menuid === '889'){
        //
        // }

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
            <MenuTopView Data={Data}
                       //  renderTagView={(index)=>this._renderTopView({index,data:Data})}

            />
        )
    }
    render() {
        const {Data} = this.props.ReadFunReducer;
        console.log(this.state.imagesPath)
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
        backgroundColor: '#f4f4f4',
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