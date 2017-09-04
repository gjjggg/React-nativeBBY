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
            if (data.Result === '1'){


                let moreDic2 = {};
                moreDic2.menuid =  '889';
                moreDic2.menuname =  '更多服务';
                moreDic2.flag =  '1';
                moreDic2.rednum =  '0';

                if (data.Data.length>8&&data.Data.length<=15) {
                   data.Data[7] =  moreDic2
                }else if(data.Data.length>15){
                    data.Data[7] =  moreDic2
                    data.Data[15] =  moreDic2
                }
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
