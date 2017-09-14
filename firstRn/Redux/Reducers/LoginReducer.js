/**
 * Created by guohongan on 2017/8/26.
 */
import * as types from '../Constant/ActionTypes'



const  initialState = {
    typeee:null,
    data:null,
    depData:null,
    zcflag:null,
    error:null,

    weburl:null,
    xjid:null,
    xjflag:null,
    artid:null,
    vdate:null,


};
export  default  function oginReducer (state = initialState,action) {
    console.log(state)
    console.log(action)
    switch (action.type){
        case  types.LOGIN_SUCCESS:
            return Object.assign({},state,{
                typeee:'1',
                data:action.data,
                depData:action.depData,
                zcflag:action.zcflag,
                weburl:action.data[0].weburl,
                xjid:action.data[0].xjid,
                xjflag:action.data[0].xjflag,
                artid:action.data[0].artid,
                vdate:action.data[0].vdate,

            });
        case types.LOGIN_ERROR:
            return Object.assign({},state,{
                typeee:'0',
                error:action.error,
            });
        default:
            return state;


    }
}

