import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducer'
import {middleware} from '../nav/AppNav'

//自定义中间项
//log 显示所有的dispatch
const logger=store=>next=>action=>{
    if(typeof action == "function"){
        console.log('dispatch a function')
    }else{
        console.log('dispatch',action)
    }
    const result =next(action);
    console.log('nextState',store.getState())
}
//中间项
const middlewares = [
    middleware,
    logger,
    thunk
];
/** * 创建store */
export default createStore(reducers, applyMiddleware(...middlewares));