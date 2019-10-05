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
  import { createMaterialTopTabNavigator ,createBottomTabNavigator} from 'react-navigation-tabs';
  // import My from './My'
  // import Popular from './Popular'
  // import Trending from './Trending'
  // import Favorite from './Favorite'
  // import Ionicons from 'react-native-vector-icons/Ionicons'
  import NavigationUtil from '../nav/NavigationUtil';
  import DynamicTabNavigator from '../nav/DynamicTabNavigator';
  
  
  
  
  export default class Index extends Component{
    
      render(){
        NavigationUtil.navigation=this.props.navigation;
        return <DynamicTabNavigator/>
      }
  }
  const styles=StyleSheet.create({
      
  })
  
  