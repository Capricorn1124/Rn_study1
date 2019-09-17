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


export default class My extends Component{
    render(){
        return(
            <View>
             <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                   <Text>welcome to  my page</Text> 
              </SafeAreaView>
                              
            </View>
        )
    }
}
const styles=StyleSheet.create({
    
})

