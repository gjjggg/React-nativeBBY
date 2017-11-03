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
       //_renderTagView(index):React.PropTypes.object,
        renderTagView:React.PropTypes.object,
        duration : 1000

    }
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            currpage:0
        };
      }
   _renderOnPressPageTag({inded}){
        let dic = this.props.Data[inded]
        let dataCount = this.props.Data.length
        let indedLength = inded+1;
        if (dic.menuid === '889'){
          if (indedLength+1<dataCount){
              var scrollView = this.refs.scrollview
              //更新状态ji
              let gaiCurrent =    parseInt(indedLength/8)
              console.log(gaiCurrent)
              this.setState({
                  currentPage:gaiCurrent
              })
              //让图片滚动起来
              var offsexX=gaiCurrent*SCREEN_WIDTH;
              console.log(offsexX)
              scrollView.scrollResponderScrollTo({x:offsexX, y:0, animated:true})
              // scrollView.scrollTo({x:offsexX, y: 0, animated: true})
          }


        }else{

            {this.props.renderTagView(inded)}
        }
       // {
       //     this.props.renderTagView(inded)
       // }
       //()=>this.props.renderTagView(pageee*8+i)
   }

    renderSmallBanner({pageee,allPage}){
      let itemcount = 8;
      if((pageee+1)*8>this.props.Data.length){
          if (this.props.Data.length%8 !=0){
              itemcount = this.props.Data.length%8;
          }
      }
        let  btnWidth  = (SCREEN_WIDTH-20*5)/4;
        let  btnHeight = (SCREEN_WIDTH-20*5)/4+20;
        let  margin = 20;
        let allChild = [];
        for(let i=0;i<itemcount;i++){
            let row = i %4;
            let loc = parseInt(i/4);
            let appviewx=margin+(margin+btnWidth)*row;
            let appviewy=10+(10+btnHeight)*loc;
            let urlImage = `../../../Image/Home/${this.props.Data[pageee*8+i].menuname}.png`;
            var icon = this.props.Data[pageee*8+i].menuname
            // console.log(urlImage)
            allChild.push(

                <TouchableOpacity key={i} style={[{position:'absolute',left:appviewx,top:appviewy,width:btnWidth,height:btnHeight},tiaomuTop.bigDiView]}
                                  index ={pageee*8+i}
                                  onPress={()=>this._renderOnPressPageTag({inded:pageee*8+i})}


                >

                    <Image style={tiaomuTop.imageCenterView} source={{uri:icon}}/>
                    <Text style={tiaomuTop.textCenterView}
                          numberOfLines ={1}>
                        {this.props.Data[pageee*8+i].menuname}
                    </Text>
                </TouchableOpacity>
            )
        }
        return allChild;

    }

    renderBigBuJiu(){
        //向上取整,有小数就整数部分加1
       let page =   Math.ceil(this.props.Data.length/8)
      //  console.log(page);
        let allChild = [];
        for (let i=0;i<page;i++){
          backGroundstyle = i == 0 ? {backgroundColor:'#efab32'}: {backgroundColor:'#f4fa55'}
            allChild.push(
              <View key={i} style={styles.bigView}>
                  {this.renderSmallBanner({pageee:i,page})}
              </View>
            )
        }
        return allChild

    }

    render() {
        return (
         <View style={styles.menuTopViewStyle}>
             <ScrollView  ref="scrollview"
                          style={styles.topcontainer}
                          horizontal={true}
                          showsHorizontalScrollIndicator={false}
                          showsVerticalScrollIndicator={false}
                 //自动分页
                          pagingEnabled={true} >
                 {this.renderBigBuJiu()}

             </ScrollView>
             <View style={styles.viewBottomView}/>
         </View>
        );
    }
}

const tiaomuTop = StyleSheet.create({
   bigDiView:{
       justifyContent: 'center',
       alignItems: 'center',
   },
    imageCenterView:{
       marginTop:0,
       marginLeft:15/5,
       width:(SCREEN_WIDTH-20*5)/4-15,
       height:(SCREEN_WIDTH-20*5)/4-15,
       resizeMode:Image.resizeMode.contain
    },
    textCenterView:{
       marginTop:7.5,
       width:(SCREEN_WIDTH-20*5)/4,
       textAlign:'center',
        fontSize:13,
        color:'#1c1b20'

    },


});
const styles = StyleSheet.create({
    menuTopViewStyle:{
        marginLeft:0,
        marginTop:0,
        width:SCREEN_WIDTH,
        height:((SCREEN_WIDTH-20*5)/4+20)*2+30+0.5,
        backgroundColor:'#ffffff',
    },
    topcontainer:{

        marginLeft:0,
        marginTop:0,
        width:SCREEN_WIDTH,
        height:((SCREEN_WIDTH-20*5)/4+20)*2+30,
        backgroundColor:'#ffffff',



    },
    bigView: {
        marginLeft: 0,
        marginTop: 0,
        height:((SCREEN_WIDTH-20*5)/4+20)*2+30,
        width: SCREEN_WIDTH
    },
    viewBottomView:{
        marginLeft:0,
        marginBottom:0.5,
        width:SCREEN_WIDTH,
        height:0.5,
        backgroundColor:'#d8d8d8'

    },


});



// renderScrollPostionView(){
//
//     let  btnWidth  = (SCREEN_WIDTH-50)/4;
//     let  btnHeight = (SCREEN_WIDTH-50)/4+25;
//     let  margin = 10;
//
//     let allChild = [];
//     for( let i=0;i<this.props.Data.length;i++){
//
//         let row = (i-8*parseInt(i/8)) %4;
//         let loc = parseInt((i-8*parseInt(i/8))/4);
//         let appviewx=margin+(margin+btnWidth)*row;
//         let appviewy=margin+(margin+btnHeight)*loc;
//
//         // (appviewx, appviewy+ scrollViewHeight+5,btnWidth,btnHeight)
//         allChild.push(
//
//             <View style={{position:'absolute',left:appviewx+parseInt(i/8)*SCREEN_WIDTH,top:appviewy,width:btnWidth,height:btnHeight,backgroundColor: 'red'}}>
//
//
//             </View>
//
//
//         )
//
//     }
//     return allChild;
//
// }
//
// _renderTagView(index){
//
//   console.log(index)
//
// }