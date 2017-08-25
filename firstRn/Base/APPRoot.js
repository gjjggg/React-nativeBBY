/**
 * Created by guohongan on 2017/8/22.
 */
import {
    StackNavigator,
    TabNavigator
}from 'react-navigation'
import  React from  'react';
import {
    Image,
    StyleSheet,
    Text
} from  'react-native'
//Tab
import DongTai from '../Controller/DongTai/DongTai'
import ShouYe from  '../Controller/ShouYe/ShouYe'
import WoDe from  '../Controller/WoDe/WoDe'
//图片
const dongtainormal = require('../Image/Tabbar/圈子未选中.png')
const dongtaiselect = require('../Image/Tabbar/圈子选中.png')

const xiaoyuannormal = require('../Image/Tabbar/我的校园未选中.png')
const xiaoyuanselect = require('../Image/Tabbar/我的校园选中.png')

const wodenormal = require('../Image/Tabbar/我的未选中.png')
const wodeselect = require('../Image/Tabbar/我的选中.png')

const MyTab = TabNavigator ({
     DongTai:{
         screen:DongTai,
         navigationOptions:{
             tabBarLabel:(({tintColor,focused})=>{
                 return(
                     <Text
                         style={!focused?styles.containernormal:styles.containerselect}
                     >
                         动态
                     </Text>
                 )
             }),
             tabBarIcon:(({tintColor,focused})=>{
                 return(
                     <Image
                         source={!focused?dongtainormal:dongtaiselect}
                         style={styles.tabbarImage}
                     />
                 )
             })

         }
     },
    ShouYe:{
        screen:ShouYe,
        navigationOptions:{
            tabBarLabel:(({tintColor,focused})=>{
                return(
                    <Text
                        style={!focused?styles.containernormal:styles.containerselect}
                    >
                        校园
                    </Text>
                )
            }),
            tabBarIcon:(({tintColor,focused})=>{
                return(
                    <Image
                        source={!focused?xiaoyuannormal:xiaoyuanselect}
                        style={styles.tabbarImage}
                    />
                )
            })

        }
    },
    WoDe:{
        screen:WoDe,
        navigationOptions:{
            tabBarLabel:(({tintColor,focused})=>{
                return(
                    <Text
                         style={!focused?styles.containernormal:styles.containerselect}
                    >
                        我的
                    </Text>
                )
            }),
            tabBarIcon:(({tintColor,focused})=>{
                return(
                    <Image
                        source={!focused?wodenormal:wodeselect}
                        style={styles.tabbarImage}
                    />
                )
            })

        }
    }
},{
    tabBarPosition:'bottom',
    animationEnabled:true,
    tabBarOptions:{
        style:{
          height:49
        },
        labelStyle:{
          color:'#00c8ff',
         marginBottom:5,

        },

    }


});

const styles = StyleSheet.create({
    containerselect: {
        color:'#00c8ff',
        textAlign:'center',
        marginBottom:3,
        fontSize:12,
    },
    containernormal: {
        color:'#bcbcbc',
        textAlign:'center',
        marginBottom:3,
        fontSize:12,
    },
    tabbarImage:{
        height:20,
        width:20,
        marginTop:0,
    }
});


const MyNav = StackNavigator({
    MyTab:{
        screen:MyTab
    }


});
export default  MyNav;