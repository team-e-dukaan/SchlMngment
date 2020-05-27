import Principal from '../principal/principal';
import Login from '../screens/login'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import Details from '../principal/Details';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
   
    Principal: {
        screen: Principal,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
        // navigationOptions:({ navigation })=>{}{
        //   title:'login',
        // },
      },
    
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
        // navigationOptions:({ navigation })=>{}{
        //   title:'login',
        // },
      },
    
  
      Details:
      {
          screen: Details,
          navigationOptions: {
            title: 'Details',
            //headerStyle: { backgroundColor: '#eee' }
          }
      
      },
  }


const PrincipalStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default PrincipalStack;