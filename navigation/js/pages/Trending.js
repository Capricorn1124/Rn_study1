/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import actions from '../action/index'
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
import {connect} from 'react-redux';

 class Trending extends Component{
    render(){
        const {navigation} =this.props;
        return(
            <View>
             <StatusBar barStyle="dark-content" />
             <SafeAreaView>
                   <Text>welcome to  Trending page</Text> 
                   <Button
                       title="改变主题颜色"
                       onPress={()=>{
                         this.props.onThemeChange('#096')
                       }}
                   />
              </SafeAreaView>
                              
            </View>
        )
    }
}
//要么是返回表达式state=》({})
//要么是return需要的数据
const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({
    onThemeChange:theme =>dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToProps)(Trending)


