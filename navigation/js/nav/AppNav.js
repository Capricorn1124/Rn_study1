/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import {Button,Platform,ScrollView,StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems} from 'react-navigation-drawer';
// import { DrawerNavigatorItems } from 'react-navigation-drawer';
import Homepage from '../pages/Home';
import Detail from '../pages/Detail';
import Welcome from '../pages/Welcome';
import {connect} from 'react-redux';
import {createReactNavigationReduxMiddleware , createReduxContainer} from  'react-navigation-redux-helpers'

export const rootCom = 'Auth';//设置根路由
const AuthStack = createStackNavigator({
    Welcome:{
        screen:Welcome,
        navigationOptions:({navigation})=>({//静态配置
            header:null,//可以通过header设为null 来禁用StackNavigator的Navigation Bar
        })
    },
 });
//抽屉
const DrawerNav=createDrawerNavigator({
    Homepage:{
        screen:Homepage,
        navigationOptions:{
            drawerLabel:"Homepage"
        }
    }
}, {
    initialRouteName:'Homepage',
    contentOptions:{
        activeTintColor: '#e91e63'
      },
      contentComponent:(props)=>(<ScrollView>
        <SafeAreaView
          style={styles.container}
          forceInset={{ top: 'always', horizontal: 'never' }}
        >
          {/* <DrawerNavigatorItems {...props} /> */}
        </SafeAreaView>
      </ScrollView>)
    
});
const AppTopNAvigation=createMaterialTopTabNavigator({
    Homepage:{
        screen:Homepage,
        navigationOptions:{
            tabBarLabel:"推荐"
        }
    }
 

},{
    tabBarOptions:{
        tabStyle:{
            mindWidth:50
        },
        scrollEnabled:true,//是否支持选项卡滚动，默认false
        style:{
          backgroundColor:'#000'//北京颜色
        },
        indicatorStyle:{
            height:2,
            backgroundColor:'#E53D3E',
            width:80,
            marginLeft: 30,
            borderLeftWidth: 2,

        },//标签指示器的颜色
        labelStyle:{
            fontSize:18,
            marginTop: 6,
            marginBottom: 6
        }//文字的样式
    }
});
const AppBottomNavigator=createBottomTabNavigator(
    {
        Homepage:{
            screen:Homepage,
            navigationOptions:{
                tabBarLabel:"首页",
            }
        }

    },{
        tabBarOptions:{
            activeTintColor:"#e91e63",
            inactiveTintColor:"#000",
            style:{
                fontSize:32
            },
            showIcon:true
        }
    }
);
const AppStack=createStackNavigator({
    Homepage:{
        screen:Homepage
    },
    Detail:{
        screen:Detail,
        navigationOptions:({navigation})=>({//静态配置
            header:null,//可以通过header设为null 来禁用StackNavigator的Navigation Bar
        })
    },
    Bottom:{
        screen:AppBottomNavigator,
        navigationOptions:({navigation})=>({//静态配置
            title:"this is 111"
        })
    },
    Top:{
        screen:AppTopNAvigation,
        navigationOptions:({navigation})=>({//静态配置
            title:"Top"
        })
    },
    DrawerNav:{
        screen:DrawerNav,
        navigationOptions:({navigation})=>({//静态配置
            title:"DrawerNav"
        })
    }
})
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
// export default  AppStackNavigator;
export const RootNavigator= 
    createSwitchNavigator(
      {
        App: AppStack,
        Auth: AuthStack,
        // navigationOptions:({navigation})=>({//静态配置
        //     header:null,//可以通过header设为null 来禁用StackNavigator的Navigation Bar
        // })
      },
      
      {
        initialRouteName: 'Auth',
      }
    );
/** * 1.初始化react-navigation与redux的中间件，
 *  * 该方法的一个很大的作用就是为reduxifyNavigator的key设置actionSubscribers(行为订阅者) 
 * * 设置订阅者@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L29 
 * * 检测订阅者是否存在@https://github.com/react-navigation/react-navigation-redux-helpers/blob/master/src/middleware.js#L97 
 * * @type {Middleware} */
export const middleware = createReactNavigationReduxMiddleware(
    state => state.nav,
    'root'
);
 
/** * 2.将根导航器组件传递给 reduxifyNavigator 函数, 4-4
 * * 并返回一个将navigation state 和 dispatch 函数作为 props的新组件； 
 * * 注意：要在createReactNavigationReduxMiddleware之后执行 */
const AppWithNavigationState = createReduxContainer(RootNavigator, 'root');

/** * State到Props的映射关系 * @param state */
const mapStateToProps = state => ({
    state: state.nav,//v2
});
/** * 3.连接 React 组件与 Redux store */
export default connect(mapStateToProps)(AppWithNavigationState);