/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, View, Image, Text, FlatList} from 'react-native';
 
const Story = ({image, title, abstract}) =>{
    return(
        <View style={styles.story}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.abstract}>{abstract}</Text>
            </View>
        </View>
    )
}
''
 
 const Headlines = ({headlines}) => {
   return (
     <View style={styles.container}>
      <FlatList
        data={headlines}
        renderItem={({item}) => <Story image={item.multimedia[2].url} title={item.title} abstract={item.abstract}/>}
        keyExtractor={(item, index) => index}
      />
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container:{
     width: '100%',
     height: 550,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#00626D',
     position: 'absolute',
     transform: [{translateY: 20}],
     zIndex: 1,
   },
   story:{
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    height: 280,
    borderBottomWidth: 3,
    borderColor: '#D3D3D3',
    borderRadius: 2,
    paddingLeft: 100,
   },
   title:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    paddingBottom: 10,
    paddingRight: 100
   },
   abstract:{
    fontSize: 15,
    paddingRight: 100,
   },
   imageContainer:{
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    marginRight: 25,
    paddingLeft: 10
   },
   image:{
    width: 150,
    height: 150
   },
});
 
export default Headlines;
 