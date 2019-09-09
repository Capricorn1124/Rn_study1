/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import FlatList from './pages/FlatList';
import Splider from './pages//Splider';
import Home from './pages/Home';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppRoot =createStackNavigator({
    App:{
        screen:App,
      
    },
    FlatList:{
        screen:FlatList,
        navigationOptions: ({navigation})=>({
            title:'FlatList'
        }) 
    },
    Home:{
        screen:Home,
        navigationOptions: ({navigation})=>({
            title:'FlatList'
        }) 
    },
    Splider:{
        screen:Splider,
        navigationOptions: ({navigation})=>({
            title:'Splider'
        })
    }
})
const AppContainer = createAppContainer(AppRoot);
AppRegistry.registerComponent(appName, () => AppContainer);
