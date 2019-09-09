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
const city=['北京','上海','深圳','武汉','北京','上海','深圳','武汉','北京','上海','深圳','武汉','北京','上海','深圳','武汉']

export default class FlatItem extends Component{
  constructor(props, context) {
    super(props, context);
    this.state={
      isLoading:false,
      dataArray:city
    }
  }
  //下拉刷新
  loadDate(refresh){
    if(refresh){
      this.setState({
        isLoading:true
      });
    }
   
  let temp=[]
    setTimeout(()=>{
      if(refresh){
        for(var i=this.state.dataArray.length-1;i>=0;i--){
          temp.push(this.state.dataArray[i])
        }
      }else{
        temp=this.state.dataArray.concat(city)
      }
      
      this.setState({
        isLoading:false,
        dataArray:temp
      })
    },2000)
  }
  //上啦加载
  getIndicate(){
    return (
      <View>
        <ActivityIndicator
          size={'large'}
          animating={true}
        />
        <Text>正在加载更多</Text>
      </View>
    )
  }
  //列表循环
  _renderItem(data){
    return  (
        <Text style={styles.item}>{data}</Text>
        )

  }
    render(){
        return(
            <View>
                <Text>登陆页面</Text>
                <FlatList
                  data={this.state.dataArray}
                  renderItem={({item}) => this._renderItem(item)}
                  // 实现下拉刷新。默认样式
                  // refreshing={this.state.isLoading}
                  // onRefresh={()=>{
                  //   this.loadDate()
                  // }}
                  //自定义下拉刷新
                  refreshControl={
                    <RefreshControl
                      title={'loading'}
                      colors={['red']}
                      tintColor={'red'}
                      refreshing={this.state.isLoading}
                      onRefresh={()=>{
                        this.loadDate('refresh')
                      }}
                    />
                  }
                  //上拉加载
                  ListFooterComponent={()=>this.getIndicate()}
                  onEndReached={()=>{
                    this.loadDate()
                  }}
                />
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
  item:{
    backgroundColor:'#169',
    height:200,
    fontSize:20,
    alignContent:'center',
    justifyContent:'center',
    marginBottom: 20,
  }
})
