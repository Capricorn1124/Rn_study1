import Types from '../../action/type'
/* 
state树的结构：
popular:{
    java:{
        items:[],
        isLoading:
    },
    ios:{
        items:[],
        isLoading:
    }
}
如何动态的设置store，和动态获取store（store key不固定）
配置好单个的以后在总的里面做聚合
*/
const defaultState={}
export default  function onAction(state = defaultState,action){
    switch(action.type){
        case Types.LOAD_POPULAR_SUCCESS:
            return {
                ...state,
                [action.storeName]:{
                    ...[action.storeName],
                    items:action.items,//原始数据
                    projectModes:action.projectModes,//此次要展示的数据
                    isLoading:false,
                    hideLoadingMore:false
                }
            };
        case Types.LOAD_POPULAR_FAIL:
                return {
                    ...state,
                    [action.storeName]:{
                        ...[action.storeName],
                        projectModes:action.projectModes,
                        isLoading:false
                    }
                };
        case Types.POPULAR_REFRESH:
                return {
                    ...state,
                    [action.storeName]:{
                        ...[action.storeName],
                        projectModes:action.projectModes,
                        isLoading:true
                    }
                };
        case Types.PULL_LOAD_SUCCESS://上拉加载成功
                        return {
                            ...state,
                            [action.storeName]:{
                                ...[action.storeName],
                                projectModes:action.projectModes,
                                hideLoadingMore:false,
                                pageIndex:action.pageIndex
                            }
                        };   
        case Types.PULL_LOAD_FAIL://上拉加载失败
                        return {
                            ...state,
                            [action.storeName]:{
                                ...[action.storeName],
                                projectModes:action.projectModes,
                                hideLoadingMore:true,
                                pageIndex:action.pageIndex
                            }
                        };        
            default:
                return state;
    }
}