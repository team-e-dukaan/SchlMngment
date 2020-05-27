import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import React from 'react';


export default function ReviewDetails({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {/* { navigation.getParam('title') } */}
          Hii
        </Text>
       
      </Card>
    </View>
  );
}
