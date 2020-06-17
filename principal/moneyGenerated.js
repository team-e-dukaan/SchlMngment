import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React,{useState} from 'react';
import {Component} from 'react';
import Card from '../shared/card';
export  function moneyGenerated({navigation}) {
  // res
    const pressHandler = () => {
        navigation.goBack();
      }
    
  return (
    <View style={styles.ff}>


<View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text></Text>
          </View>
       
        <View style={{flex: 2, backgroundColor: 'white'}} >
          {/* <Card  style={{backgroundColor:'skyblue'}}><Text  >{navigation.getParam('data').userName}</Text></Card> */}
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          <Card style={styles.card1}><Text style={{justifyContent:"center"}}>hii</Text></Card>
          </View>
       
      </View>
      {/* <Text>Money Generated Screen</Text> */}
      {/* <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} >
          <Text>hii</Text>
          </View>
        <View style={{flex: 2, backgroundColor: 'skyblue'}} >
          </View>
        {/* <View style={{flex: 3, backgroundColor: 'steelblue'}} /> */}
      {/* </View>  */}
      {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    </View>
  );
}
export default  class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      res:"",
      // brand: "Ford",
      // model: "Mustang",
      // color: "red",
      // year: 1964
    };
  }
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
     var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/staff/getAllStaffDetails";
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
  
      //   alert(JSON.stringify(responseJson));
        //  var res = responseJson
        //  console.log(res)
        //  console.log(res.data[0].userName)
        //  console.log(res.data[1].userName)
        // this.props.navigation.navigate('Login',res)
        this.setState({res: responseJson});
        console.log(this.state.res)
        console.log(this.state.res.data[1].userName)
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
   // console.log('hii')
  //  console.log(this.props.navigation.state.params);
  //  var s='Bearer '+this.props.navigation.state.params;
  // //  const res;
  // //let res;
  //  // var emailId = this.state.email
  //   var url = "http://ec2-52-12-91-65.us-west-2.compute.amazonaws.com:8080/swrmsdc/staff/getAllStaffDetails";
  //  // var url2 = url.concat(emailId);
  //   fetch(url, {
  //     method: 'GET',
  //     // params: emailId,
      
  //     headers: {
  //    //  'Accept': 'application/json',
  //     // 'Content-Type': 'application/json',
  //      'Authorization':s,
  //      'schoolId':2
  //    },
  //     //Request Type 
  //   })
  //     .then((response) => response.json())
  //     //If response is in json then in success
  //     .then((responseJson) => {
 
  //    //   alert(JSON.stringify(responseJson));
  //        // res = responseJson
  //         this.setState({res: responseJson});
  //      // console.log(this.state.res)
  //       //console.log(responseJson)
  //       // console.log(this.props.res.data[0].userName)
  //       // console.log(res.data[1].userName)
  //       // // <Text></Text>
  //      // this.props.navigation.navigate('Login',res)
 
  //     })
 //console.log(responseJson);
 //console.log(res)
      //If response is not in json then in error
      // .catch((error) => {
      //   //Error 
      //   alert(JSON.stringify(error));
      //   console.error(error);
      // }
     // );
     return (
      // console.log('hii')
       <View>
         <Text>hii</Text>
   
      <Button color='maroon' title="Submit" onPress={this.getDataUsingGet()} /> 
      <Text>{this.state.res.status}</Text>
      <Text>{this.state.res.data[0].userName}</Text>
     {/* <Text>{res.status}</Text> */}
    
  </View>
     );
   }
  }
const styles = StyleSheet.create({
  ff: {
    flex: 1,
   
    justifyContent:"center"
  },
  card1: {
    borderRadius: 6,
    elevation: 3,
    height:20,
    padding:10,
    backgroundColor: 'steelblue',
    shadowOffset: { width: 1, height: 1 },
    shadowColor: '#333',
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
  },
})