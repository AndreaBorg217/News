/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, Image, Text} from 'react-native';
 
 
 const Header = ({date}) => {
   return (
     <View style={styles.container}>
     <Image style={styles.logo} source={require('../assets/logo.png')}/>
     <Text style={styles.date}>{date.slice(0,10)}</Text>
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container:{
     width: '100%',
     height: '100%',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#000000',
     position: 'absolute',
     transform: [{translateY: -280}]
   },
   logo:{
    width: 350,
    height: 50
   },
   date:{
    color: '#FFFFFF',
    fontSize: 20,
    fontStyle: 'italic'
   }
});
 
export default Header;
 