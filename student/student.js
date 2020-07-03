// import { StyleSheet, View, Text,Button } from 'react-native';
// import {globalStyles} from '../styles/global';
// import React from 'react'; 

// export default function SampleNav({navigation}) {
//     const pressHandler = () => {
//         navigation.goBack();
//       }
    
//   return (
//     <View style={globalStyles.container}>
//       <Text>Student Screen</Text>
//       {/* <Button title='back to home screen' onPress={pressHandler} /> */}
//     </View>
//   );
// }
// import { StyleSheet, View, Text,Button } from 'react-native';


// import {globalStyles} from '../styles/global';
// import React from 'react'; 

// export default function SampleNav({navigation}) {
//     const pressHandler = () => {
//         navigation.goBack();
//       }
    
//   return (
//     <View style={globalStyles.container}>
//       <Text>Staff Screen</Text>
//       {/* <Button title='back to home screen' onPress={pressHandler} /> */}
//     </View>
//   );
// }
import { StyleSheet, View, Text,Button,TouchableOpacity, FlatList ,Alert } from 'react-native';

import {globalStyles} from '../styles/global';
import React,{useState} from 'react'; 
import Card from '../shared/card';

import Details from '../principal/Details'
export  default function Student({navigation}) {
  const j=   navigation.getParam('data').userId;
  const jj=   navigation.getParam('data').jwString;

    const [menu, setMenu] = useState([
       
        { title: 'Attendance', key: '1' },
        { title: 'Report', key: '2' },
        { title: 'Assignments', key: '3' },
        { title: 'Complaints', key: '4' },
        { title: 'Fee Details', key: '5' },
        { title: 'Feedback', key: '6' },
        { title: 'Subjects', key: '7' },
      ]);
    
    const pressHandler = () => {
        navigation.goBack();
      }
 const      getDataUsingGet=() =>{
        // http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc
          var id = 77
          var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/student/getStudentDetails/parentId/";
          var url2 = url.concat(id);
          var s='Bearer'+jj;
          fetch(url2, {
            method: 'GET',
            // params: emailId,
            headers: {
              // 'Accept': 'application/json',
              // 'Content-Type': 'application/json',
              'Authorization':s,
              'schoolId':2
            },
            //Request Type 
          })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
      
              alert(JSON.stringify(responseJson));
              var res = responseJson
              console.log(res)
            //  this.props.navigation.navigate('Login',res)
      
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
     const fun=(item)=>
      {
        {(() => {
          if (item.title=='Subjects') {
            return (
           // console.log('classes')
            navigation.navigate('Subjects')
            //  <div>someCase</div>
            )
           }
         
          else if (item.title=='Complaints') {
            return (
              navigation.navigate('Complaints')
            )
          }
          else if (item.title=='Attendance') {
            return (
              navigation.navigate('Attendance')
            )
          }
          else if (item.title=='Report') {
            return (
              navigation.navigate('Report')
            )
          }
          else if (item.title=='Assignments') {
            return (
              navigation.navigate('Assignments')
            )
          }
          else if (item.title=='Fee Details') {
            return (
              navigation.navigate('FeeDetails')
            )
          }
          else if (item.title=='Feedback') {
            return (
              navigation.navigate('Feedback')
            )
          }
           else {
            return (
              //  <Text style={styles.logo1}> Improper mail or id </Text>
              console.log('other route')
            )
          }
        })()}
      }
    
  return (
    <View style={globalStyles.container}>
    {/* <FlatList data={menu} renderItem={({ item }) => (
      <TouchableOpacity onPress={() => fun(item)}>
        <Card>
          <Text style={globalStyles.titleText}>{ item.title }</Text>
        </Card>
      </TouchableOpacity>
    )} /> */}
   <Button color='maroon' title="Submit" onPress={()=>{getDataUsingGet();}} /> 
    <View style={styles.bott}>
      <Button title='sample nav'
      onPress={() => navigation.navigate('Details')} />
      </View>
  </View>

    // <View style={globalStyles.container}>
    //   <Text>Principal Screen</Text>
    //   {/* <Button title='back to home screen' onPress={pressHandler} /> */}
    // </View>
  );
}
// export default  class App extends React.Component {
//    //j=   navigation.getParam('userId');
//   getDataUsingGet() {
//     // http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc
//       var emailId = this.state.email
//       var url = "http://ec2-15-206-74-22.ap-south-1.compute.amazonaws.com:8080/swrmsdc/authentication/sendOTP?emailId=";
//       var url2 = url.concat(emailId);
//       fetch(url2, {
//         method: 'GET',
//         // params: emailId,
  
//         //Request Type 
//       })
//         .then((response) => response.json())
//         //If response is in json then in success
//         .then((responseJson) => {
  
//           alert(JSON.stringify(responseJson));
//           var res = responseJson
//           console.log(res)
//           this.props.navigation.navigate('Login',res)
  
//         })
  
  
//         //If response is not in json then in error
//         .catch((error) => {
//           //Error 
//           alert(JSON.stringify(error));
//           console.error(error);
//         });
//       Alert.alert('You are redirected to register page! Please Wait')
  
//       // verifyOTP
//     }
//     render() {
//       return (
//         <View >
//           <Text >Welcome</Text>
//           {/* <View style={styles.inputView} > */}
//             {/* <TextInput
//               style={styles.inputText}
//               placeholder="Mobile Number"
//               placeholderTextColor="#003f5c"
//               onChangeText={text => this.setState({ email: text })}
//             // keyboardType={'numeric'}
//             /> */}
  
//          {/* </View> */}
//          <Button color='maroon' title="Submit" onPress={()=>{console.log()}} /> 
        
// {/*        
//           <TouchableOpacity onPress={() =>{ this.getDataUsingGet() }}  >
       
  
//             <Text>LOGIN</Text>
//           </TouchableOpacity>
//        */}
  
  
//         </View >
//       );
//     }
// }
const styles = StyleSheet.create({
    bott:
      {
        //flexDirection:
        // flexDirection: 'column',
        // justifyContent:'space-between',
        position: 'absolute',
        bottom:0,
        left:0,
      },
      input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
      },
      
      contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
      footer: {
        height: 100
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
      color: "black"
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