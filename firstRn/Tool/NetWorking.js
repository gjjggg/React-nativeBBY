'use strict'
import  NetWorkingFetchBlob from 'react-native-fetch-blob'
const  Request = {

    Header:{
    },
    GetConfig:{

        indicator:true,

    },
    PostConfig:{
        indicator:true,

    },
    UpLoadConfig:{
        indicator:true,

    },
    get:(url,successCallBack,failCallBack) =>{
        console.log(url);

        return NetWorkingFetchBlob
            .config(Request.GetConfig)
            .fetch('GET',url,Request.Header)
            .then((response) => {
               //  console.log(response);
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((request) => {
            // console.log(request);
                successCallBack(request);

            })
            .catch((error)=>{

               // console.log(error);
                failCallBack(error);
            })

    },

    getttt:(url,successCallBack,failCallBack) =>{
        console.log(url);

        return NetWorkingFetchBlob
            .config(Request.GetConfig)
            .fetch('GET',url,Request.Header)
            .then((response) => {
                // console.log(response);
                if (response.respInfo.status === 200){
                    return response.json();
                }else {

                    return failCallBack(response);
                }
            })
            .then((request) => {
                // console.log(request);
                successCallBack(request);

            })
            .catch((error)=>{

                //console.log(error);
                failCallBack(error);
            })

    },

    /**
     * @param url               请求网址
     * @param body              要上传的参数
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns {Promise.<U>|Promise.<T>}
     */
    post:(url, body, successCallBack, failCallBack) =>{

        Request.Header.body = JSON.stringify(body);
        console.log(Request.Header);

        return RNFetchBlob
            .config(Request.PostConfig)
            .fetch('POST',url,Request.Header)
            .then((response) => {
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response.data);
                }
            })
            .then((response)=>{
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            })
    },
    /**
     * @param url               请求网址
     * @param body              要上传的信息,会自动转码
     * @param uploadProgress    上传进度
     * @param successCallBack   返回正确的值
     * @param failCallBack      返回错误的值
     * @returns
     */
    upload:(url,body,uploadProgress,successCallBack,failCallBack) => {
        return RNFetchBlob
            .config(Request.UpLoadConfig)
            .fetch('POST',url,{
                'Content-Type' : 'multipart/form-data',
            },body)
            .uploadProgress((written, total) => {
            })
            .progress((received, total) => {
                let perent = received / total;
                // 搜索进度打印
                console.log(perent);
                uploadProgress(perent);
            })
            .then((response)=>{
                if (response.respInfo.status === 200){
                    return response.json();
                }else {
                    return failCallBack(response);
                }
            })
            .then((response)=> {
                // console.log(response);
                successCallBack(response);
            })
            .catch((error)=>{
                failCallBack(error);
            });
    }

}

module.exports = Request