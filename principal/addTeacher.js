
import { StyleSheet, Button, TextInput,
  ScrollView, View, Text,TouchableWithoutFeedback, Keyboard  } from 'react-native';
//import { globalStyles } from '../styles/global.js';
import {globalStyles} from '../styles/global';
import { Formik } from 'formik';
import React from 'react';import * as yup from 'yup';
console.disableYellowBox = true;
const reviewSchema = yup.object({
  fname: yup.string()
    .required()
    .min(4),
    lname: yup.string()
    .required()
    .min(4),
    createdBy: yup.string()
    .required(),
    email: yup.string()
    .required(),
    location: yup.string()
    .required(),
    role: yup.string()
    .required(),
    dob: yup.string()
    .required(),
    comments: yup.string()
    .required(),
    clsTeaf: yup.string()
    .required(),
    department: yup.string()
    .required(),
    
  address: yup.string()
    .required()
    .min(8),
  mobileNo: yup.string()
    .required()
    .test('is-num-1-5', 'Number must be 10 digit', (val) => {
      return val.length ==10 && parseInt(val) > 0;
    }),
    pincode: yup.string()
    .required()
    .test('is-num-1-5', 'Number must be 6 digit', (val) => {
      return val.length ==6 && parseInt(val) > 0;
    }),
});

export default function ReviewForm() {


  return (
    
    <View style={globalStyles.container}>
      <ScrollView>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik scrollable
        initialValues={{ fname: '',lname:'',createdBy:'',email:'',mobileNo: '',location:'', address: '' ,
      pincode:'',role:'',dob:'',comments:'',clsTeaf:'',department:''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          // addReview(values);
          console.log(values);
        }}
      >
        {props => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter First Name'
              onChangeText={props.handleChange('fname')}
              value={props.values.fname}
            />
            <Text style={globalStyles.errorText}>{props.touched.fname && props.errors.fname}</Text>
            <TextInput
              style={globalStyles.input}
              placeholder='Enter Last Name'
              onChangeText={props.handleChange('lname')}
              value={props.values.lname}
            />
            <Text style={globalStyles.errorText}>{props.touched.lname && props.errors.lname}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Created By Id'
              onChangeText={props.handleChange('createdBy')}
              value={props.values.createdBy}
              keyboardType='numeric'
            />
<Text style={globalStyles.errorText}>{props.touched.createdBy && props.errors.createdBy}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter Email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />
<Text style={globalStyles.errorText}>{props.touched.email && props.errors.email}</Text>
 <TextInput 
              style={globalStyles.input}
              placeholder='Mobile No'
              onChangeText={props.handleChange('mobileNo')}
              value={props.values.mobileNo}
              keyboardType='numeric'
            />
          <Text style={globalStyles.errorText}>{props.touched.mobileNo && props.errors.mobileNo}</Text>

          <TextInput
              style={globalStyles.input}
              placeholder='Enter location'
              onChangeText={props.handleChange('location')}
              value={props.values.location}
            />
<Text style={globalStyles.errorText}>{props.touched.location && props.errors.location}</Text>
            <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Address'
              onChangeText={props.handleChange('address')}
              value={props.values.address}
            />
            <Text style={globalStyles.errorText}>{props.touched.address && props.errors.address}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Pincode'
              onChangeText={props.handleChange('pincode')}
              value={props.values.pincode}
              keyboardType='numeric'
            />   
              <Text style={globalStyles.errorText}>{props.touched.pincode && props.errors.pincode}</Text>  
      <TextInput
              style={globalStyles.input}
              placeholder='Enter role'
              onChangeText={props.handleChange('role')}
              value={props.values.role}
            />
            <Text style={globalStyles.errorText}>{props.touched.role && props.errors.role}</Text>
      <TextInput
              style={globalStyles.input}
              placeholder='DOB as yyyy-mm-dd'
              onChangeText={props.handleChange('dob')}
              value={props.values.dob}
            />
            <Text style={globalStyles.errorText}>{props.touched.dob && props.errors.dob}</Text>
  <TextInput
              style={globalStyles.input}
              multiline
              placeholder='Comments'
              onChangeText={props.handleChange('comments')}
              value={props.values.comments}
            />
<Text style={globalStyles.errorText}>{props.touched.comments && props.errors.comments}</Text>
            <TextInput 
              style={globalStyles.input}
              placeholder='Class Teacher for'
              onChangeText={props.handleChange('clsTeaf')}
              value={props.values.clsTeaf}
            />
<Text style={globalStyles.errorText}>{props.touched.clsTeaf && props.errors.clsTeaf}</Text>
<TextInput
              style={globalStyles.input}
              placeholder='Enter department'
              onChangeText={props.handleChange('department')}
              value={props.values.department}
            />   
            <Text style={globalStyles.errorText}>{props.touched.department && props.errors.department}</Text>    
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
      </TouchableWithoutFeedback>
      </ScrollView>
    </View>
    
  );
}
