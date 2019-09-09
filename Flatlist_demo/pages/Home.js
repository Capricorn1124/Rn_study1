/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import  Splider from './Splider';
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


export default class Home extends Component{
  constructor(props, context) {
    super(props, context);
    // navigation = this.props.navigation;
    navigation =this.props.navigation;
  }
  
  static navigationOptions={
    title:"head",
    headerBackTitle:'返回哈哈'//都设置返回此页面的返回按钮文案

}
    render(){
      const {navigate}=this.props.navigation.navigate;
        return(
            <View>
                <Text>首页</Text>
                
               
            </View>
        )
    }
}

