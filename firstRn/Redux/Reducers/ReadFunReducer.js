/**
 * Created by guohongan on 2017/8/26.
 */
import * as types from '../Constant/ActionTypes'

const  initialState = {
    typeee:null,
    info:null,
    Data:null,
    error:null,



};
export  default  function ReadFunReducer (state = initialState,action) {
    switch (action.type){
        case  types.READERFUN_SUCCESS:
            return Object.assign({},state,{
                typeee:'1',
                info:action.info,
                Data:action.Data,


            });
        case types.READERFUN_ERROR:
            return Object.assign({},state,{
                typeee:'0',
                error:action.error,
            });
        default:
            return state;


    }
}

