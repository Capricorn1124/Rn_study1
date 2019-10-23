/* 
组件的封装和复用
TouchableOpacity:封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。
*/
import React , {Component} from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from "react-native"
import { isTryStatement } from '@babel/types';
import FontAwesome from "react-native-vector-icons/FontAwesome"

export default class PopularItem extends Component {
    render() {
        const { item } = this.props; //item是上一级返回的
        // 如果没有内容或没有作者返回null
        if(!item || !item.owner) return null;
        let favoriteButton = 
        <TouchableOpacity
        style={{padding:6}}
        onPress={()=>{
        }}
        underlayColor={'transparent'}    
        > 
        <FontAwesome
            name={'star-o'}
            size={26}
        />
        </TouchableOpacity>

        return (
            <View>
             <TouchableOpacity
             onPress={this.props.onSelect}
             >
                <View style={styles.wrapper}>
                    <Text style={styles.text}>{item.full_name}</Text>
                    <Text>{item.description}</Text>
                    <View>
                        <Text>star</Text>
                    </View>
                    {favoriteButton}
                
                </View>
             </TouchableOpacity>
   
               </View>
        )
    }
}
 const styles=StyleSheet.create({
    wrapper:{
        height:100,
        marginBottom:25,
        marginLeft:5,
        borderRadius:2,
        shadowColor: 'gray',
        shadowRadius:1,
        shadowOpacity:0.4,
        elevation:2
    },
    text:{
        color:'#737337',
        fontSize:16,
        marginLeft:50
    }
 })

