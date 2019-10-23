import Types from '../type';
import DataStore from '../../expand/Dao/DataStore'
/* 获取最热数据的一步action
storeName:指的是顶部导航栏的name
pageSize:页面大小，传递多少数据
先配置 type，type主要是要进行操作的名称，action之后会传递到reducer，所以配置好action之后配置reducer
*/
export function onLoadPopularData(storeName,url,pageSize){
    return dispatch=>{
        dispatch({
            type:Types.POPULAR_REFRESH,storeName:storeName
        });
        let dataStore = new DataStore();
        dataStore.fetchData(url).then(data=>{
            console.log('onLoadPopularData成功');
            console.log(data)
            handleData(dispatch,storeName,data,pageSize);
        }).catch(err=>{
            console.log(err)
            dispatch({
                type:Types.LOAD_POPULAR_FAIL,storeName:storeName,error:err
            })
        })
    }

}
/* 
上拉加载更多
pageIndex：第几页
PageSize：每页展示条数
dataArray：原始数据
callback：回调函数，可以通过回调函数来向调用页面通信，比如一场信息的展示，没有更多等待
*/
export function onLoadMorePopular(storeName,pageIndex,PageSize,dataArray=[],callback){
    return dispatch=>{
    
        setTimeout(()=>{//模拟网络请求
            if ((pageIndex-1)*pageSize>=dataArray.length){//已经加载完全部的数据
                if(typeof callback == 'function'){
                    callback('no more')
                };
                dispatch({
                    type:Types.PULL_LOAD_FAIL,
                    error:"no more",
                    storeName:storeName,
                    pageIndex:--pageIndex,
                    projectModes:dataArray
                })
            }else{
                //本次和载入的最大数量
                let max =pageSize * pageIndex > dataArray.length ? dataArray.length : pageSize * pageIndex;
                dispatch({
                    type:Types.PULL_LOAD_SUCCESS,
                    storeName:storeName,
                    pageIndex:pageIndex,
                    projectModes:dataArray.slice(0,max)
                })
            }

        })
    }
}
//处理下拉刷新的数据
function handleData(dispatch,storeName,data,pageSize) {
    let fixItems=[];
    if(data && data.data && data.data.items){
        fixItems=data.data.items;
    }
    dispatch({
        type:Types.LOAD_POPULAR_SUCCESS,
        projectModes:pageSize>fixItems.length ? fixItems : fixItems.slice(0,pageSize),//第一次要加载的数据
        storeName:storeName,
        pageIndex:1

    })
}