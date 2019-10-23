/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
import action from '../action/index';
import PopularItem from '../component/PopularItem'
import { connect } from 'react-redux';
import Toast, {DURATION} from "react-native-easy-toast"
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  FlatList,
  RefreshControl,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { tsImportEqualsDeclaration, thisTypeAnnotation } from '@babel/types';
import { onLoadPopularData , onLoadMorePopular } from '../action/popular';

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
const pageSize = 10;
const pageIndex=0;
export default class Popular extends Component{
    constructor(props, context) {
        super(props, context);
        this.tabNames=['java','ios','php','java','react']
    }
    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index)=>{
            tabs[`tab${index}`]={
                // screen:PopularTab  静态页面，直接显示这个页面
                screen:props =><PopularTabPage {...props} tabLabel={item}/>,//动态传递参数，PopularTab
                navigationOptions:{
                    title:item
                }, 
            }
        })
        return tabs;
    }
    render(){
        const Tab=createMaterialTopTabNavigator(
            this._genTabs(), 
            {
                tabBarOptions:{
                    tabStyle: {
                        width: 100
                    },
                    style: {
                        backgroundColor: '#fff',
                      },
                    scrollEnabled:true,
                    indicatorStyle:{
                        height:3,
                        width:50,
                        backgroundColor: 'red',
                        marginLeft:25,
                        borderRadius:4
                    },
                    labelStyle:{//文字样式
                        fontSize:16
                    },
                    activeTintColor:'red',
                    inactiveTintColor:'#000'
                 }
        }
        )
        const TabNavigator=createAppContainer(Tab)
        return  <TabNavigator/>
    }
}
class PopularTab extends Component{
    constructor(props){
        super(props);
        const { tabLabel } = this.props;
        this.storeName = tabLabel;
    }
    //获取与当前页面有关的数据
    _store() {
        const  { popular } =this.props;
        let store =popular[this.storeName];
        if(!store){
            store={
                items:[],
                isLoading:false,
                projectModes:[],
                hideLoadingMore:true
            }
        }
        return store;
    }
    //发送action获取数据
    loadData(loadmore){
        const { onLoadPopularData , onLoadMorePopular}=this.props;
        const store = this._store();
        const url =this.genFetchUrl(this.storeName);
        if(loadmore){
            console.log("没有更多了");
            console.log(++store.pageIndex)
            // onLoadMorePopular(this.storeName, ++store.pageIndex, pageSize, store.items)
            // onLoadMorePopular(this.storeName,++store.pageIndex,pageSize,store.items,callback=>{
            //     this.refs.toast.show('没有更多了');
                
            // });
        }else{
            onLoadPopularData(this.storeName,url,pageSize);
        }
     
        /* 也可以直接用dispatch
        dispatch(action.onLoadPopularData(this.storeName,url))
        */
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    }
    genFetchUrl(key){
        return URL+key+QUERY_STR;
    }
    componentDidMount(){
        this.loadData();
    }
    renderItem(data){
        const item =data.item;
        return  <PopularItem
            item={item}//传递给组件的数据
            onSelect={()=>{
            }}
        />
        //      (<View style={{marginBottom:10}}>
        //     <Text style={{backgroundColor:'#faa'}}>{item.id}</Text>
        // </View>) 
    }
    //list加载到最后的时候
    genIndicator(){
        return this._store().hideLoadingMore ? null :
            <View style={styles.indicatorWrap}>
                <ActivityIndicator
                    style={styles.indicator}
                />
                <Text>正在加载更多</Text>
            </View>
    }
    render(){
        //popular是取出来的
        let store = this._store();
        return(
            <View>
             <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                   <FlatList
                    data={store.projectModes}
                    renderItem={data=>
                        this.renderItem(data)//注意不要写成{this.renderItem(data)}
                    }
                    keyExtractor={item =>''+item.id}
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            titleColor={'red'}
                            colors={['red']}
                            refreshing={store.isLoading}
                            onRefresh={()=>{this.loadData()}}
                        />
                    }
                    ListFooterComponent={()=>this.genIndicator()}
                    onEndReached={()=>{
                        this.loadData(true);
                    }}
                    onEndReachedThreshold={0.5}
                   />
                   <Toast ref={"toast"}
                       position={"bottom"}
                   />
              </SafeAreaView>
                              
            </View>
        )
    }
}

/* 
先把popularTab订阅
第一个参数是props和dispatch
第二个参数是他的返回值
*/
const mapStateToProps= state=>({
    popular:state.popular
})
const mapDispatchToProps = dispatch => ({
    //将dispatch（onRefreshPopular(storeName,url）绑定到props
    onLoadPopularData:(storeName,url,pageSize)=> dispatch(action.onLoadPopularData(storeName,url,pageSize)), //发送信息调用onLoadPopularData
    onLoadMorePopular:(storeName,pageIndex,PageSize,items,callback)=> dispatch(action.onLoadMorePopular((storeName,pageIndex,PageSize,items,callback)))
    
})
const PopularTabPage = connect(mapStateToProps,mapDispatchToProps)(PopularTab);

const styles=StyleSheet.create({
    indicatorWrap:{
        alignItems:'center'
    },
    indicator:{
        color:'red',
        margin:10
    }
})

