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
import NavigationUtil from '../nav/NavigationUtil';
import FetchDemo from '../pages/Fetchdemo'
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


export default class Popular extends Component{
    constructor(props, context) {
        super(props, context);
        this.tabNames=['推荐','朗诵','国学','朗诵','国学','朗诵','国学']
    }
    _genTabs(){
        const tabs = {};
        this.tabNames.forEach((item,index)=>{
            tabs[`tab${index}`]={
                // screen:PopularTab  静态页面，直接显示这个页面
                screen:props =><PopularTab {...props} tabLabel={item}/>,//动态传递参数，PopularTab
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

    render(){
        const { tabLabel } =this.props;
        return(

            <View>
             <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                   <Text>{tabLabel}</Text> 
                   <Text 
                   onPress={()=>{
                       NavigationUtil.goToPage({navigation:this.props.navigation},'Detail')
                   }}
                   >跳转到详情页</Text>
                     <Button
                       title="fetch"
                       onPress={()=>{
                        NavigationUtil.goToPage({navigation:this.props.navigation},'FetchDemo')
                       }}
                   />
                       <Button
                       title="AsyncStorageDemo"
                       onPress={()=>{
                        NavigationUtil.goToPage({navigation:this.props.navigation},'AsyncStorageDemo')
                       }}
                   />
                     <Button
                       title=" DataStoreDemo"
                       onPress={()=>{
                        NavigationUtil.goToPage({navigation:this.props.navigation},'DataStoreDemo')
                       }}
                   />
                  
              </SafeAreaView>
                              
            </View>
        )
    }
}
const styles=StyleSheet.create({
    item:{
       
    }
    
})

