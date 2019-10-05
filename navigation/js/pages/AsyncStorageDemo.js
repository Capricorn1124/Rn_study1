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
import AsyncStorage from '@react-native-community/async-storage';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

 export default class AsyncStorageDemo extends Component{
//设置默认属性
    constructor(props) {
        super(props);
        this.state={
            showText:''
        }
    }
   doSave= async () => {
    try {
      await AsyncStorage.setItem('key', this.valueKey);
    } catch (error) {
      // Error saving data
    }
  }
  getData= async () => {
    try {
      const value = await AsyncStorage.getItem('key');
      if (value !== null) {
        console.log(value);
      }
     } catch (error) {
       // Error retrieving data
     }
  }
  doRemove(){
    AsyncStorage.removeItem('key', err=>{
      err&&console.log(err)
    })
  }
  render() {
    return (
      <SafeAreaView>
        <Text>AsyncStorage</Text>
        <View style={styles.wrapper}>
        <TextInput
        autoCapitalize="none"
        style={styles.input}
            onChangeText={text => {
                this.valueKey=text
            }}
        />
        </View>
        <View>

            <Text style={styles.text} onPress={()=>{
                this.doSave();
                }}>存储 </Text>
            <Text onPress={()=>{
            this.doRemove();
            }}> 删除</Text>
            <Text onPress={()=>{
            this.getData();
            }} >获取</Text>
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
  },
  text:{
    width:200,
    fontSize:20
  }

})
