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
  ActivityIndicator,
  ViewPagerAndroid
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { tsImportEqualsDeclaration, thisTypeAnnotation } from '@babel/types';
import {connect} from  'react-redux';
import actions from '../action/index'


 class Favorite extends Component{
 
  render() {

    return (
      <SafeAreaView>
        <Text>Favorite</Text>
        <Button
                       title="改变主题颜色"
                       onPress={()=>{
                         this.props.onThemeChange('#588')
                       }}
                   />
      </SafeAreaView>
    );
  }
}
const styles=StyleSheet.create({
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  }

})

const mapStateToProps = state =>({})
const mapDispatchToProps = dispatch =>({
    onThemeChange:theme =>dispatch(actions.onThemeChange(theme))
})
export default connect(mapStateToProps,mapDispatchToProps)(Favorite)