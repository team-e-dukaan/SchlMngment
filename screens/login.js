// import React,{useState} from 'react';
// import 'localstorage-polyfill'; 
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry, TabBarIOS } from 'react-native';
// // import AsyncStorage from '@react-native-community/async-storage';
// import { createStackNavigator } from 'react-navigation-stack';
// export  function Login({navigation}) {}
// export default  class App extends React.Component {
 
//   state = {
//     email: '',
//     otp: ""
//   }
//   fun()
//   { <Text>{ this.props.navigation.getParam('status') }</Text>}
//  getData(){
// //  { var React = require('react-native');
// //  var Parse = require('parse/react-native');
// //  var ParseReact = require('parse-react/react-native');
//    localStorage.setItem('myData','hii');
//    let data=localStorage.getItem('myData');
//    console.log(data);
//  }
//   getDataUsingGet({navigation}) {
//     console.log("inside func")
//     // var emailId = this.state.email
//     // var userName=this.props.navigation.getParam('userName')

//     // var password=this.state.otp
//     // var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";
//     // //var url2 = url.concat(userName);

//     // //var url3 = url2.concat(password);
//     // var bb=this.props.navigation.getParam('userName')
//     // console.log(bb)
//     // //console.log(hii)
//     // fetch(url, {
//     //   method: 'GET',
//     // //   body:
//     // //   {userName=this.props.navigation.getParam('userName'),password=this.otp
//     // // }
//     //   // params: emailId,

//     //   //Request Type 
//     // })
//     //   .then((response) => response.json())
//     //   //If response is in json then in success
//     //   .then((responseJson) => {

//     //     alert(JSON.stringify(responseJson));
//     //     var res = responseJson
//     //   //  console.log(res)


//     //   })


//     //   //If response is not in json then in error
//     //   .catch((error) => {
//     //     //Error 
//     //     alert(JSON.stringify(error));
//     //     console.error(error);
//     //   });
//     // Alert.alert('You are redirected to register page! Please Wait')

//     // // verifyOTP
//     //post call
//     //var password = this.state.otp
//     var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";

//     //var user = this.props.navigation.getParam('userName')
//     // //console.log(user)
//     // const requestBody = { userName: user, password: password }
//     const requestBody = { userName: Navya, password: 6382 }
//      console.log(requestBody)
     

//     fetch(url, {
//       // method: 'POST',
//       method: "POST",//Request Type 
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(requestBody)
//       // },
//     })
//       .then((response) => response.json())
//       //If response is in json then in success
//       .then((responseJson) => {

//         // alert(JSON.stringify(responseJson));
//         // console.log(responseJson);
//         var res = responseJson
//         var jwtToken = res.data.jwString
//         // console.log(res.data.jwString)
//         console.log(res)
//         if (res.status == 200) {
//           if (res.data.userRole == "ROLE_admin") {
//            // this.props.navigation.navigate('Principal', res)
//            console.log("passed")
//           }
//           else {
//             //this.props.navigation.navigate('About', res)
//             console.log("not passed")
//           }
//           // switch (res) {

//           //   case res.data.userName == saketh:
//           //     this.props.navigation.navigate('Principal', res)
//           //     break;

//           //   // case '2':
//           //   //   this.TWO();
//           //   //   break;

//           //   // case '3':
//           //   //   this.THREE();
//           //   //   break;

//           //   default:
//           //     this.props.navigation.navigate('About', res)
//           //     // Alert.alert("NUMBER NOT FOUND");
//           //     console.log(res.data.userRole)

//           // }


//         }
//       })
//   }
 

//   render() {
//     return (
//       <View style={styles.container}>
        
//       {(() => {
//         if (this.props.navigation.getParam('status')==200) {
//           return (
//           // this.fun()

//           <View>

//             <Text style={styles.logo} onClick={()=> this.getData()}>
//              Trial
//               </Text>
//         {/* <Text>{ this.props.navigation.getParam('status') }</Text> */}
//         <View style={styles.inputView} >
//           <TextInput
//             secureTextEntry
//             style={  
//             {padding:50,height:500,}}
//             placeholder="Enter Otp"
//             placeholderTextColor="#003f5c"
//             onChangeText={text => this.setState({ otp: text })}
//             keyboardType={'numeric'}
//           />
//         </View>
//         <TouchableOpacity onPress={() => console.log("welcome")} style={{  width: "80%",
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom: 10}}>
//         <Text style={{ color: "white", padding: 80 }} onPress={() => { console.log("inside");this.getDataUsingGet() }}>LOGIN</Text>
//           {/* <TouchableOpacity onPress={() => navigation.navigate('SampleNav', text)} style={styles.loginBtn}> */}

//           {/* <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy");  this.props.navigation.navigate('Principal')}}>LOGIN</Text> */}
            
//           {/* <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy"); this.props.navigation.navigate('Student')}}>stud</Text>
//           <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy"); this.props.navigation.navigate('staff')}}>staff</Text> */}
//   {/* <Text style={{color: "white",padding:80}} onPress={() =>{this.getData()}}>Trial</Text> */}
//    </TouchableOpacity>
        
//           </View>
//           //  <div>someCase</div>
//           )
//          }
//         // else if (otherCase) {
//         //   return (
//         //     <div>otherCase</div>
//         //   )
//         // }
//          else {
//           return (
//              <Text style={styles.logo1}> Improper mail or id </Text>
            
//           )
//         }
//       })()}
  


//       </View >
//     );
//   }
// }
// const styles = StyleSheet.create({
//   ff:{
//     backgroundColor: 'white',
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#003f5c',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
 
//   logo: {
//     fontWeight: "bold",
//     fontSize: 50,
//     color: "#fff",
//     marginBottom: 40
//   },
//   logo1: {
//     fontWeight: "bold",
//     fontSize: 20,
//     color: "#fff",
//     marginBottom: 40
//   },
//   inputView: {
//     width: "80%",
//     backgroundColor: "#fff",
//     borderRadius: 25,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: "center",
//     padding: 20
//   },
//   inputText: {
//     height: 50,
//     color: "black",
//   },
//   forgot: {
//     color: "white",
//     fontSize: 11
//   },
//   loginBtn: {
//     width: "80%",
//     backgroundColor: "#fb5b5a",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     marginBottom: 10
//   },
//   loginText: {
//     color: "white"
//   }
// });
import React, { useState } from 'react';
import 'localstorage-polyfill'; 
import * as SecureStore from 'expo-secure-store';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from 'react-navigation-stack';
export function Login({ navigation }) { }
export default class App extends React.Component {
  state = {
    email: '',
    otp: ""
  }
  fun() { <Text>{this.props.navigation.getParam('status')}</Text> }
  fun1() { }
  //  getData(){
// //  { var React = require('react-native');
// //  var Parse = require('parse/react-native');
// //  var ParseReact = require('parse-react/react-native');
//    localStorage.setItem('myData','hii');
//    let data=localStorage.getItem('myData');
//    console.log(data);
//  }
jwtToken(token) {
  //  { var React = require('react-native');
  //  var Parse = require('parse/react-native');
  //  var ParseReact = require('parse-react/react-native');
  // localStorage.setItem('myData', jwtToken);
  // var data = localStorage.getItem('myData');
  // console.log(data);


  // await SecureStore.setItemAsync('secure_token', 'sahdkfjaskdflas$%^&');
  // const token = await SecureStore.getItemAsync('secure_token');
  // console.log(token); // output: sahdkfjaskdflas$%^&

  const setToken = async (token) => {
    await SecureStore.setItemAsync('secure_token', token);
  };

  const getToken = async () => {
    return await SecureStore.getItemAsync('secure_token');
  };

  setToken(token);
  //getToken().then();
   getToken().then(token => console.log(token)); // output '#your_secret_token'
  return token
}
test(token) {
  // var emailId = this.state.email
  var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/user/test";
  // var url2 = url.concat(emailId);
  fetch(url, {
    method: 'GET',
    headers: {
      Authorization: "Bearer" + " " + token
    },
    // params: emailId,

    //Request Type 
  })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {

      alert(JSON.stringify(responseJson));
      var res = responseJson
     // console.log(res)
     // this.props.navigation.navigate('Home', res)

    })


    //If response is not in json then in error
    .catch((error) => {
      //Error 
      alert(JSON.stringify(error));
      console.error(error);
    });
  // Alert.alert('You are redirected to register page! Please Wait')

  // verifyOTP
}
  getDataUsingPost() {

    // var password = this.state.otp
    // var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";

    // var user = this.props.navigation.getParam('userName')
    // const requestBody = { userName: user, password: password }
    // // console.log(requestBody)


    // fetch(url, {
    //   // method: 'POST',
    //   method: "POST",//Request Type 
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(requestBody)
    //   // },
    // })
    //   .then((response) => response.json())
    //   //If response is in json then in success
    //   .then((responseJson) => {

    //     // alert(JSON.stringify(responseJson));
    //     // console.log(responseJson);
    //     var res = responseJson
    //     var jwtToken = res.data.jwString
    //     // console.log(res.data.jwString)
    //     console.log(res)
    //     if (res.status == 200) {

    //       if (res.data.userRole == "ROLE_admin") {
    //         this.props.navigation.navigate('Principal', res)
    //       }
          
    //       else {
    //         this.props.navigation.navigate('About', res)
    //       }
    //       // switch (res) {

    //       //   case res.data.userName == saketh:
    //       //     this.props.navigation.navigate('Principal', res)
    //       //     break;

    //       //   // case '2':
    //       //   //   this.TWO();
    //       //   //   break;

    //       //   // case '3':
    //       //   //   this.THREE();
    //       //   //   break;

    //       //   default:
    //       //     this.props.navigation.navigate('About', res)
    //       //     // Alert.alert("NUMBER NOT FOUND");
    //       //     console.log(res.data.userRole)

    //       // }


    //     }
    //   })
    var password = this.state.otp
    var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";

    var user = this.props.navigation.getParam('userName')
    const requestBody = { userName: user, password: password }
    // console.log(requestBody)


    fetch(url, {
      // method: 'POST',
      method: "POST",//Request Type 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
      // },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        // alert(JSON.stringify(responseJson));
        // console.log(responseJson);
        var res = responseJson
        var token = res.data.jwString
        // console.log(typeof (res.data.jwString))
        if (res.status == 200) {
          this.setState = { isLoading: false, }

          this.jwtToken(token)
          //this.test(token)
console.log(res);
//console.log(res.data.jwString);
        // params: { sport: x },  this.props.navigation.navigate('Principal', res)
        var item=1;
        this.props.navigation.navigate('Student',res );
        }
      })
  }
 
  render() {
    return (
      <View style={styles.container}>

        {(() => {
          if (this.props.navigation.getParam('status') == 200) {
            return (
              // this.fun()
              <View>
                <Text style={styles.logo}>Welcome</Text>
                <Text>{ this.props.navigation.getParam('userName') }</Text>
                <View style={styles.inputView} >
                  <TextInput
                    secureTextEntry
                    style={
                      { padding: 50, height: 500, }}
                    placeholder="Enter Otp"
                    placeholderTextColor="#003f5c"
                    onChangeText={text => this.setState({ otp: text })}
                    keyboardType={'numeric'}
                  />
                </View>
                <TouchableOpacity onPress={() => console.log("welcome")} style={{
                  width: "80%",
                  backgroundColor: "#fb5b5a",
                  borderRadius: 25,
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 40,
                  marginBottom: 10
                }}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('SampleNav', text)} style={styles.loginBtn}> */}

                  <Text style={{ color: "white", padding: 80 }} onPress={() => { this.getDataUsingPost(); }}>LOGIN</Text>
                  {/* <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy"); this.props.navigation.navigate('Student')}}>stud</Text>
          <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy"); this.props.navigation.navigate('staff')}}>staff</Text> */}
                </TouchableOpacity>

              </View>
              //  <div>someCase</div>
            )
          }
          // else if (otherCase) {
          //   return (
          //     <div>otherCase</div>
          //   )
          // }
          else {
            return (
              <Text style={styles.logo1}> Improper mail or id </Text>
              //
              
            //  this.props.navigation.navigate('Principal', res)
            )
          }
        })()}



      </View >
    );
  }
}
const styles = StyleSheet.create({
  ff: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fff",
    marginBottom: 40
  },
  logo1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "black",
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});