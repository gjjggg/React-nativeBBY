/**
 * Created by guohongan on 2017/9/14.
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
import  Video from 'react-native-video'
export default class DongTaiCell extends Component {

    static  defaultProps ={
          smallData:React.PropTypes.object


    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            rate:0,
        };
      }
    _renderOnPressImage(mp4Count,imageAllData){
        console.log(imageAllData[1])
        if(mp4Count == 1){

           <Video
              source={{uri:imageAllData[1]}}
              style={styles.fullScreen}
              rate={this.state.rate}                          // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
              paused={false}
              volume={1}                   // 声音的放大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
              muted={true}                  // true代表静音，默认为false.
              resizeMode='cover'       // 视频的自适应伸缩铺放行为，
              onLoad={this.onLoad}                       // 当视频加载完毕时的回调函数
              onLoadStart={this.onLoadStart}            // 当视频开始加载时的回调函数
              onProgress={this.onProgress}   //  进度控制，每250ms调用一次，以获取视频播放的进度
              onEnd={this.onEnd}             // 当视频播放完毕后的回调函数
              onError={this.onError}    // 当视频不能加载，或出错后的回调函数
              onAudioBecomingNoisy={this.onAudioBecomingNoisy}
              onAudioFocusChanged={this.onAudioFocusChanged}
              repeat={false}                            // 是否重复播放

           />

        }

    }
    _renderAllImageView(){
        let mp4Count = 0;
        let imageAllData=[];
        if (this.props.smallData.imgurl1){

           imageAllData.push(this.props.smallData.imgurl1)
        }
        if (this.props.smallData.imgurl2){
            if(this.props.smallData.imgurl2.indexOf('mp4') > 0 ){
                mp4Count =1
            }
            imageAllData.push(this.props.smallData.imgurl2)
        }
        if (this.props.smallData.imgurl3){

            imageAllData.push(this.props.smallData.imgurl3)
        }
        if (this.props.smallData.imgurl4){

            imageAllData.push(this.props.smallData.imgurl4)
        }
        if (this.props.smallData.imgurl5){

            imageAllData.push(this.props.smallData.imgurl5)
        }
        if (this.props.smallData.imgurl6){

            imageAllData.push(this.props.smallData.imgurl6)
        }
        if (this.props.smallData.imgurl7){

            imageAllData.push(this.props.smallData.imgurl7)
        }
        if (this.props.smallData.imgurl8){

            imageAllData.push(this.props.smallData.imgurl8)
        }
        if (this.props.smallData.imgurl9){

            imageAllData.push(this.props.smallData.imgurl9)
        }




        let  allData = [];
        let  btnWidth;
        let  btnHeight;
        let  margin;
        let count;
        let littleCount;
        margin = 10;
        count = imageAllData.length;



        if (count<3){
            littleCount = count;
           if(mp4Count == 1){
               littleCount =1;
               count = 1;
           }
        }else {
            littleCount = 3;
        }

        btnWidth = (SCREEN_WIDTH-10*(littleCount+1))/littleCount;
        btnHeight= btnWidth*0.65;
        for(let i=0;i<count;i++){
            let row = i %littleCount;
            let loc = parseInt(i/littleCount);
            let appviewx=margin+(margin+btnWidth)*row;
            let appviewy=margin+(margin+btnHeight)*loc;


            allData.push(
               <TouchableOpacity style={{marginTop:5,marginLeft: 10,width:btnWidth,height:btnHeight,backgroundColor:'#ffffff'}}
                                 onPress={()=>this._renderOnPressImage(mp4Count,imageAllData)}>
                <Image
                  style={{marginTop:0,marginLeft:0,width:btnWidth,height:btnHeight,backgroundColor:'#ffffff'}} source={{uri:imageAllData[i]}}
                >
                </Image>

               </TouchableOpacity>
            )
        }

       return allData;
    }

    render() {
        console.log(this.props.smallData)
        console.log(this.props.smallData.t_name)
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.imageTopView} source={{uri:this.props.smallData.t_img}}/>
                    <Text style={styles.titleTextTop}>
                        {this.props.smallData.t_name}
                    </Text>
                    <Text style={styles.dateTitle}>
                        {this.props.smallData.date}
                    </Text>
                </View>
                <Text style={styles.muleTitle}>
                    {this.props.smallData.title}
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
       backgroundColor:'#ffffff'
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


    },
    fullScreen: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
