/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

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
import NavigationUtil from "../nav/NavigationUtil"

export default class Welcome extends Component{
    componentDidMount(){
        this.timer=setTimeout(()=>{
          NavigationUtil.resetToHomePage({
            navigation:this.props.navigation
          });
        },200)
    }
    componentWillUnmount() {
        this.timer&&clearTimeout(this.timer)
    }

    render(){
        const {navigation} =this.props;
        return(
            <SafeAreaView>
                  <Text>welcome！</Text> 
                  <Button
                  title="change to home"
                  onPress={()=>{
                    navigation.navigate("App");
                  }}
                   />

            </SafeAreaView>
                             
          
        )
    }
}
const styles=StyleSheet.create({
    
})

