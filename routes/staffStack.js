import Staff from '../staff/staff';
import Login from '../screens/login'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    Staff: {
        screen: Staff,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
     
      },
    Login: {
        screen: Login,
        navigationOptions: ({ navigation }) => {
          return {
           // title:'login',
  
          }
        },
     
      },
    
  
  }


const StaffStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default StaffStack;