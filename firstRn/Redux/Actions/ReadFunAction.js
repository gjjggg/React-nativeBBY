/**
 * Created by guohongan on 2017/8/28.
 */
import  * as types from '../Constant/ActionTypes'
import Config from '../../Tool/Config'
import NetWorking from  '../../Tool/NetWorking'
import {
    AsyncStorage,
} from 'react-native';
export  function  ReaderFunAction(userName,passWord) {
    return dispatch => {
        var index = Math.floor((Math.random()*Config.api.baseLoginRootUrl.length))
        var baseLoginRootUr =  Config.api.baseLoginRootUrl[index]

        // let url = `${baseLoginRootUr}username=1866&pwd=202CB962AC59075B964B07152D234B70`
        let url = `${baseLoginRootUr}username=${userName}&pwd=${passWord}`
        // console.log(url)
        NetWorking.get(url,(data)=>{
            console.log(data)
            if (data.message === '登陆成功'){

                DeviceEventEmitter.emit('EventName','监听');
                dispatch(LoginDataSuccess(data.data,data.depData,data.zcflag));


            }else{
                dispatch(LoginDataError(data.error));
            }
        },(error)=>{
            //console.log('12332323131')
            dispatch(LoginDataError(error));
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