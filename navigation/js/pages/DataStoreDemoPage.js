/**
 * Sample React Native App
 *y
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import DataStore from '../expand/Dao/DataStore';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 export default class DataStoreDemo extends Component{
//设置默认属性
    constructor(props) {
        super(props);
        this.state={
            showText:''
        }
        this.dataStore=new DataStore();
    }  
  loadData(){
    let url=`https://api.github.com/search/repositories?q=${this.valueKey}`;;
    console.log("url: "+url)
    //调用离线缓存框架
    this.dataStore.fetchData(url).then(data =>{
        let showData=`初次加载时间：${new Date(data.timestamp)}\n${JSON.stringify(data.data)}`;
        // console.log("showData:"+showData)
        this.setState({
            showText:showData
        })
    }).catch(err =>{
        console.log(err)
    })
    }
  render() {
    return (
      <SafeAreaView>
        <Text>离线缓存框架</Text>
        <View style={styles.wrapper}>
        <TextInput
        autoCapitalize="none"
        style={styles.input}
            onChangeText={text => {
                this.valueKey=text
            }}
        />
        </View>
        <Text onPress={()=>{
            this.loadData()
        }}>获取缓存</Text>
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
  },
  text:{
    width:200,
    fontSize:20
  }

})
