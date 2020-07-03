import { StyleSheet, View, Text,Button } from 'react-native';
import { globalStyles } from '../styles/global';
import React,{useState} from 'react';
import {Component} from 'react';
import Card from '../shared/card';
import ReactTable from "react-table"; 
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
  //var x
  constructor(props) {
    super(props);
    this.state = {
      res:"",
      data1:[],
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
   componentDidMount=()=>{}
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
         // var res1 = responseJson
        // console.log(res1)
        //  console.log(res.data[0].userName)
        //  console.log(res.data[1].userName)
        // this.props.navigation.navigate('Login',res)

         this.setState({res: responseJson});
        console.log(this.state.res)
        console.log(this.state.res.data[1].userName)
         this.setState({data1: this.state.res.data});
        console.log(this.state.data1[1].userName)
       
       })
  
  
       //If response is not in json then in error
       .catch((error) => {
         //Error 
         alert(JSON.stringify(error));
         console.error(error);
       });
     //Alert.alert('You are redirected to register page! Please Wait')
  <Text> trial</Text>
     // verifyOTP
   }
   
   render() {
   
    //console.log(this.state.items[0].name);
  

        const data = [{  
        name: 'Ayaan',  
        age: 26  
        },{  
         name: 'Ahana',  
         age: 22  
         },{  
         name: 'Peter',  
         age: 40      
         },{  
         name: 'Virat',  
         age: 30  
         },{  
         name: 'Rohit',  
         age: 32  
         },{  
         name: 'Dhoni',  
         age: 37  
         }]  
     const columns = [{  
       Header: 'Name',  
       accessor: 'name'  
       },{  
       Header: 'Age',  
       accessor: 'age'  
       }]   
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
  
    <Button color='maroon' title="Submit" onPress={() => {this.getDataUsingGet() }}  /> 
      {/* <Button color='maroon' title="Submit" onPress={this.getDataUsingGet()} />  */}
      {/* <Text>{this.state.res.status}</Text> onClick={() => { this.props.removeTaskFunction(todo) }} */}
{/*      
      if(this.state.res.data.length)*/}
    {/* <Text>{this.state.res.data[1}</Text>  */}
      <Text>{this.state.data1[1]['staffId']}</Text>
      <Text>hii</Text>
     {/* <Text>{res.status}</Text> */}
  
     {/* <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {2}  
                  pageSizeOptions = {[2,4, 6]}  
              />   */}
   
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