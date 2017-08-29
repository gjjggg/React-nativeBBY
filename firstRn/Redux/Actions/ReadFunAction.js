/**
 * Created by guohongan on 2017/8/28.
 */
import  * as types from '../Constant/ActionTypes'
import Config from '../../Tool/Config'
import NetWorking from  '../../Tool/NetWorking'
import {
    AsyncStorage,
} from 'react-native';
//xjid=1866&xjflag=2&artid=68944&vdate=2018-04-12
export  function  ReaderFunAction(weburl,xjid,xjflag,artid,vdate) {
    return dispatch => {

        let url = `${weburl}:8000/app/app/read_fun.aspx?xjid=${xjid}&xjflag=${xjflag}&artid=${artid}&vdate=${vdate}`
         console.log(url)
        NetWorking.get(url,(data)=>{
            console.log(data)
            if (data.Result === '1'){
                console.log(data)
                dispatch(LoginDataSuccess(data.info,data.Data));

            }else{
                dispatch(LoginDataError(data.error));
            }
        },(error)=>{
            dispatch(LoginDataError(error));
        });
    }
}
export function  LoginDataSuccess(info,Data) {
    return{
        type:types.READERFUN_SUCCESS,
        info,
        Data,

    }
}
export function LoginDataError(error) {
    return{
        type:types.READERFUN_ERROR,
        error
    }
}
