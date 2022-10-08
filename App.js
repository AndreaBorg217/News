/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState,useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/header'
import Footer from './components/footer'
import Headlines from './components/headlines'
import axios from 'axios'
import {key} from './sensitive.js'
//import {sampledata} from './topstories_sample'

 
 const App = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + key)
        if(response.data){
         setData(response.data)
        }
    }
    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <Header date={data?.last_updated}/>
      <Headlines headlines={data?.results}/>
      <Footer copyright={data?.copyright}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  }
  });

export default App;
