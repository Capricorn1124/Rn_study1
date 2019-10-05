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
  View,
  Text,
  TextInput,
  Button,
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

 export default class FetchDemo extends Component{
//设置默认属性
    constructor(props) {
        super(props);
        this.state={
            showText:''
        }
    }
    loadData(){
        let url=`https://api.github.com/search/repositories?q=${this.valueKey}`
        //进行网络请求
        fetch(url)
        .then(res=>{
            res.json();
        } ).then(
            resText=>{  
                this.setState({
                    showText:resText
                })
            }
        ).catch(err=>{
            console.log("err"+err)
        })
  }
  //异常处理
    loadData1(){
        console.log("值:"+this.valueKey)
        let url=`https://api.github.com/search/repositories?q=${this.valueKey}`
        console.log(url);
        console.log("showText")
        //进行网络请求
        fetch(url)
        .then(res=>{
            if(res.ok){
              return  res.json();
            }else{
                throw new Error('network response was not ok')
            }
        } ).then(
            resText=>{  
                this.setState({
                    showText:resText
                })
            }
        ).catch(err=>{
            console.log("err"+err)
            this.setState({
                showText:err
            })
        })
    }
  render() {
    return (
      <SafeAreaView>
        <Text>Fetch</Text>
        <View style={styles.wrapper}>
        <TextInput
        autoCapitalize="none"
        style={styles.input}
            onChangeText={text => {
                this.valueKey=text
            }}
        />
        <Button
            title="获取"
            onPress={()=>{
                console.log("获取")
                this.loadData1();
            }}
        />
        </View>
        <Text>{this.state.showText}</Text>
      </SafeAreaView>
    );
  }
}

const styles=StyleSheet.create({
  viewPager: {
    flex: 1
  },
  wrapper:{
    flexDirection:"row",
    alignItems:"center"
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
  },
  input:{
      height:30,
      flex:1,
      borderColor:'black',
      borderWidth:2
  }

})
