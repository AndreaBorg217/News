/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {sampledata} from './sampledata'
import Header from './components/header'
import Footer from './components/footer'
import Headlines from './components/headlines'

const App = () => {
  return (
    <View style={styles.container}>
      <Header date={sampledata.last_updated}/>
      <Headlines headlines={sampledata.results}/>
      <Footer copyright={sampledata.copyright}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00626D'
  }
  });

export default App;
