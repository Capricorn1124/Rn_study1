/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
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
  import React, { Component } from 'react';
  import { createAppContainer, createSwitchNavigator } from 'react-navigation'
  import {createStackNavigator} from 'react-navigation-stack';
  import { createMaterialTopTabNavigator ,createBottomTabNavigator,BottomTabBar} from 'react-navigation-tabs';
  import My from '../pages//My'
  import Popular from '../pages/Popular'
  import Trending from '../pages/Trending'
  import Favorite from '../pages/Favorite'
  import Ionicons from 'react-native-vector-icons/Ionicons'
  import NavigationUtil from './NavigationUtil';
  import {connect} from 'react-redux';
  
  const TABS={
    Popular:{
        screen:Popular,
        navigationOptions:{
          tabBarLabel:"最热",
          tabBarIcon:({tinColor,focused})=>(
            <Ionicons
              name={'ios-home'}
              size={26} 
            />
          )
        }
        
      },
      Trending:{
        screen:Trending,
        navigationOptions:{
          tabBarLabel:"趋势",
          tabBarIcon:({tinColor,focused})=>(
            <Ionicons
              name={'ios-add-circle-outline'}
              size={26}
            />
          )
        },
        tabBarOptions:{
            activeTintColor:'red'
        }
      },
      Favorite:{
        screen:Favorite,
        navigationOptions:{
          tabBarLabel:"收藏",
          tabBarIcon:({tinColor,focused})=>(
            <Ionicons
              name={'md-star'}
              size={26}
              style={
                  {color:"red"}
              }
            />
          )
        },
        tabBarOptions:{
            activeTintColor:'red'
        }

        
      },
      My:{
        screen:My,
        navigationOptions:{
          tabBarLabel:"我的",
          tabBarIcon:({tinColor,focused})=>(
            <Ionicons
              name={'md-person'}
              size={26}
             
            />
          )
        }
      }
  }
  //const TabBarComponent = props => <BottomTabBar {...props}/>;
    //TABbar组件
    class TabBarComponent extends Component{
      constructor(props, context) {
          super(props, context);
          this.theme={//设置属性
              tintColor:props.activeTintColor,
              updateTime:new Date().getTime()
          }
      }
      render(){
        return <BottomTabBar
        {...this.props}
        activeTintColor={this.props.theme}
       
      
    />
        // 使用redux之前
          // const {routes, index} =this.props.navigation.state;
          // if (routes[index].params){
          //     const {theme} =routes[index].params;
          //     if(theme && theme.updateTime >this.theme.updateTime){
          //         this.theme=theme;
          //     }
          //     console.log(routes);
          //     console.log(index);
          //     console.log(theme)
          // }
      }
      
    }
  
 class DynamicTabNavigator extends Component{
      constructor(props, context) {
          super(props, context);
          console.disableYellowBox=true;
      }
      
    _tabNavigator(){
      if(this.Tab){//因为每次改变state都会调用render，也就会一直嗲用这个函数，所以为了优化，只要存在就不调用了
        console.log('111')
        return this.Tab;
      }
        const {Popular,Trending,Favorite,My}= TABS;
        const tabs={Popular,Trending,Favorite};//根据需要定制显示的tab
        Popular.navigationOptions.tabBarLabel="课程";//动态配置属性
        
     return this.Tab= createBottomTabNavigator(tabs,
        {tabBarComponent:props=>{
          return <TabBarComponent theme={this.props.theme} {...props}/>
        }})
       
    }
      render(){
        NavigationUtil.navigation=this.props.navigation;
        const Tab=createAppContainer(this._tabNavigator());
        return <Tab/>
      }
  }

const mapStateToProps = state => ({
    theme: state.theme.theme,
});

export default connect(mapStateToProps)(DynamicTabNavigator);
  
 
  
  