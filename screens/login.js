import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ActivityIndicator, FlatList, Alert, Platform, AppRegistry } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from 'react-navigation-stack';
export  function Login({navigation}) {}
export default  class App extends React.Component {
  state = {
    email: '',
    otp: ""
  }
  fun()
  { <Text>{ this.props.navigation.getParam('status') }</Text>}
  fun1()
  {}
  getDataUsingGet({navigation}) {
    var emailId = this.state.email
    var userName=this.props.navigation.getParam('userName')

    var password=this.state.otp
    var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/authentication/verifyOTP";
    //var url2 = url.concat(userName);

    //var url3 = url2.concat(password);
    var bb=this.props.navigation.getParam('userName')
    console.log(bb)
    //console.log(hii)
    fetch(url, {
      method: 'GET',
    //   body:
    //   {userName=this.props.navigation.getParam('userName'),password=this.otp
    // }
      // params: emailId,

      //Request Type 
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {

        alert(JSON.stringify(responseJson));
        var res = responseJson
      //  console.log(res)


      })


      //If response is not in json then in error
      .catch((error) => {
        //Error 
        alert(JSON.stringify(error));
        console.error(error);
      });
    Alert.alert('You are redirected to register page! Please Wait')

    // verifyOTP
  }
 

  render() {
    return (
      <View style={styles.container}>
        
      {(() => {
        if (this.props.navigation.getParam('status')==200) {
          return (
          // this.fun()
          <View>
            <Text style={styles.logo}>Welcome</Text>
        {/* <Text>{ this.props.navigation.getParam('status') }</Text> */}
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={  
            {padding:50,height:500,}}
            placeholder="Enter Otp"
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ otp: text })}
            keyboardType={'numeric'}
          />
        </View>
        <TouchableOpacity onPress={() => console.log("welcome")} style={{  width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10}}>
          {/* <TouchableOpacity onPress={() => navigation.navigate('SampleNav', text)} style={styles.loginBtn}> */}

          <Text style={{color: "white",padding:80}} onPress={() =>{ console.log("eyy");this.getDataUsingGet(); }}>LOGIN</Text>
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
          )
        }
      })()}
  


      </View >
    );
  }
}
const styles = StyleSheet.create({
  ff:{
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