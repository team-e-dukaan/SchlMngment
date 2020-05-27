import Student from '../student/student';
import Login from '../screens/login'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import Header from '../shared/header';
import { createStackNavigator } from 'react-navigation-stack';
const screens = {
    Student: {
        screen: Student,
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


const StudentStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 60 },
  }
});


export default StudentStack;