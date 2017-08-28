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

};
export  default  function oginReducer (state = initialState,action) {
    switch (action.type){
        case  types.LOGIN_SUCCESS:
            return Object.assign({},state,{
                typeee:'1',
                data:action.data,
                depData:action.depData,
                zcflag:action.zcflag,

            });
        case types.LOGIN_ERROR:
            return Object.assign({},state,{
                typeee:'0',
                error:action.error
            });
        default:
            return state;


    }
}

