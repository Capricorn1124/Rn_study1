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
  SectionList,
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
import { white } from 'ansi-colors';
const city=[
  {data:['北京','上海','深圳'],title:'一线城市'},
  {data:['武汉','北京','上海','深圳'],title:'二线城市'},
  {data:['武汉','北京','上海','深圳','武汉'],title:'三线城市'}]
export default class Splider extends Component{
  constructor(props, context) {
    super(props, context);
    this.state={
      isLoading:false,
      dataArray:city
    }
  }
  //section
//   _renderSectionHeader(data){
//  const {section} =data
//    console.log(section.title)
//     return (
//       <View style={styles.section}>
//       <Text>     {section.title}</Text>
//       </View>
//    )
//   }
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
      <View >
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
        <View style={styles.item}>
        <Text>{data}</Text>
        </View>
        )

  }
    render(){
        return(
            <View>
                <Text>登陆页面</Text>
                <SectionList
                    renderSectionHeader={({ section: { title } }) => (
                      <Text style={styles.section}>{title}</Text>
                    )}
                  sections={this.state.dataArray}
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
                  ItemSeparatorComponent={()=>
                    <View style={styles.sep}/>
                  }
                />
               
            </View>
        )
    }
}
const styles = StyleSheet.create({
  item:{
   
    height:80,
    fontSize:20,
    alignItems:'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  section:{
    backgroundColor:'#239',
    height:30,
    fontSize:20,
    zIndex:2,
    color:'#999',
    alignItems:'center',
    justifyContent:'center'
  },
  sep:{
     backgroundColor:'#169',
     height:1
    }
 
})
