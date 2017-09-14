/**
 * Created by guohongan on 2017/8/26.
 */
import  * as types from '../Constant/ActionTypes'
import Config from '../../Tool/Config'
import NetWorking from  '../../Tool/NetWorking'
import {
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
export  function  loginAction(userName,passWord) {
    return dispatch => {
        var index = Math.floor((Math.random()*Config.api.baseLoginRootUrl.length))
        var baseLoginRootUr =  Config.api.baseLoginRootUrl[index]

       // let url = `${baseLoginRootUr}username=1866&pwd=81DC9BDB52D04DC20036DBD8313ED055`
        let url = `${baseLoginRootUr}username=${userName}&pwd=${passWord}`
       console.log(url)
        NetWorking.get(url,(data)=>{
            console.log(data)
           if (data.message === '登陆成功'){
               console.log('登陆成功')
               //DeviceEventEmitter.emit('EventName','监听');
               dispatch(LoginDataSuccess(data.data,data.depData,data.zcflag));


           }else{
               console.log('09090909090900');
               dispatch(LoginDataError(data.error));
           }
        },(error)=>{
           if (error.error){
               console.log('1111111111111111');
               console.log(error)
               dispatch(LoginDataError(error));
           }

        });
    }
}
export function  LoginDataSuccess(data,depData,zcflag) {
    return{
        type:types.LOGIN_SUCCESS,
        data,
        depData,
        zcflag,

    }
}
export function LoginDataError(error) {
    return{
        type:types.LOGIN_ERROR,
        error
    }
}
