
import { StyleSheet, Button, TextInput, View, Text,TouchableWithoutFeedback, Keyboard  } from 'react-native';
//import { globalStyles } from '../styles/global.js';
import {globalStyles} from '../styles/global';
import { Formik } from 'formik';
import React from 'react';import * as yup from 'yup';
console.disableYellowBox = true;
const reviewSchema = yup.object({
  name: yup.string()
    .required()
    .min(4),
  address: yup.string()
    .required()
    .min(8),
  mobileNo: yup.string()
    .required()
    .test('is-num-1-5', 'Number must be 10 digit', (val) => {
      return val.length ==10 && parseInt(val) > 0;
    }),
});

export default function ReviewForm() {


  return (
    
    <View style={globalStyles.container}>
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Formik
        initialValues={{ name: '', address: '' ,mobileNo: ''}}
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
              placeholder='Enter Name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />
            <Text style={globalStyles.errorText}>{props.touched.name && props.errors.name}</Text>

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
              placeholder='Mobile No'
              onChangeText={props.handleChange('mobileNo')}
              value={props.values.mobileNo}
              keyboardType='numeric'
            />
          <Text style={globalStyles.errorText}>{props.touched.mobileNo && props.errors.mobileNo}</Text>
            

            {/* <TextInput 
              style={globalStyles.input}
              placeholder='Class'
              onChangeText={props.handleChange('class')}
              value={props.values.class}
              keyboardType='numeric'
            /> */}
            <Button color='maroon' title="Submit" onPress={props.handleSubmit} /> 
          </View>
        )}
      </Formik>
      </TouchableWithoutFeedback>
    </View>
    
  );
}
