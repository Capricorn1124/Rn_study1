/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
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


export default class My extends Component{
    render(){
        return(
            <View>
             <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                   <Text>welcome to  my page</Text> 
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
    
})

