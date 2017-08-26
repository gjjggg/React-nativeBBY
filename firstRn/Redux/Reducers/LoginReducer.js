/**
 * Created by guohongan on 2017/8/26.
 */
import * as types from '../Constant/ActionTypes'
const  initialState = {
    type:null,
    data:null,
    depData:null,
    zcflag:null,
    error:null,

};
export  default  function loginReducer (state = initialState,action) {
    // console.log(action);
    switch (action.type){
        case  types.LOGIN_SUCCESS:
            return Object.assign({},state,{
                type:'1',
                data:action.data,
                depData:action.depData,
                zcflag:action.zcflag,

            });
        case types.LOGIN_ERROR:
            return Object.assign({},state,{
                type:'0',
                error:action.error
            });
        default:
            return state;


    }
}

