/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, Text} from 'react-native';
 
 
 const Footer = ({copyright}) => {
   return (
     <View style={styles.container}>
     <Text style={styles.date}>{copyright}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container:{
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#00626D',
     position: 'absolute',
     transform: [{translateY: 330}]
   },
   date:{
    color: '#FFFFFF',
    fontSize: 12,
    fontStyle: 'italic',
   }
});
 
export default Footer;
 