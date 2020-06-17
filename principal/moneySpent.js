import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React from 'react';

export  function moneySpent({navigation}) {
    const pressHandler = () => {
        navigation.goBack();
      }
    console.log(navigation.getParam('title'));
  return (
    <View style={globalStyles.container}>
      <Text>Money Spent Screen</Text>
  {/* <Text>{navigation.getParam()}</Text> */}
      {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    </View> 
  );
}
export default  class App extends React.Component {
//   res;
//   pressHandler = () => {
//    //navigation.navigate('ReviewDetails');
//    const {navigate}=this.props.navigation;
//    navigation.push('Login');
//  }
//  state = {
//    email: '',
//    otp: ""
//  }
 
 getDataUsingGet() {
   console.log(this.props.navigation.state.params);
  var s='Bearer '+this.props.navigation.state.params;
  // var emailId = this.state.email
   var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/parent/getAllparentDetails";
  // var url2 = url.concat(emailId);
   fetch(url, {
     method: 'GET',
     // params: emailId,
     
     headers: {
    //  'Accept': 'application/json',
     // 'Content-Type': 'application/json',
      'Authorization':s,
      'schoolId':2
    },
     //Request Type 
   })
     .then((response) => response.json())
     //If response is in json then in success
     .then((responseJson) => {

      //  alert(JSON.stringify(responseJson));
       var res = responseJson
       console.log(res.status)
     //  console.log(navigation)
      // this.props.navigation.navigate('Login',res)

     })


     //If response is not in json then in error
     .catch((error) => {
       //Error 
       alert(JSON.stringify(error));
       console.error(error);
     });
   //Alert.alert('You are redirected to register page! Please Wait')

   // verifyOTP
 }

 render() {
   return (
     <View>
       <Text>hii</Text>
    <Button color='maroon' title="Submit" onPress={this.getDataUsingGet()} /> 
   {/* <Text>{this.props.navigation.getParam('status')}</Text> */}
   {/* <Text>{this.props.navigation.state.params}</Text> */}
</View>
   );
 }
}