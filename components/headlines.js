/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {StyleSheet, View, Image, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
 import {sampledata} from '../article_sample.js'
 
 const Headlines = ({headlines}) => {
  const [article, setArticle] = useState()

  const Story = ({image, title, abstract, url}) =>{
    return(
        <TouchableOpacity style={styles.story} onPress ={()=>setArticle(url)}>

            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: image}}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.abstract}>{abstract}</Text>
            </View>
        </TouchableOpacity>
    )
}

const Article = () =>{
  //axios fetch with url in article
  return(
    <View style={styles.article}>
      <TouchableOpacity style={styles.imageContainer} onPress={()=>setArticle('')}>
        <Image style={styles.badge} source={require('../assets/badge.png')}/>
      </TouchableOpacity>
      <Text style={styles.articleTitle}>{sampledata.response.docs[0].headline.main}</Text>
      <Text style={styles.byline}>{sampledata.response.docs[0].pub_date.slice(0,10)} | {sampledata.response.docs[0].byline.original}</Text>
      
      <Image style={styles.articleImage} source={{uri: 'https://static01.nyt.com/' + sampledata.response.docs[0].multimedia[0].url}}/>      
      
      <Text style={styles.paragraphA}>{sampledata.response.docs[0].abstract}</Text>
      <Text style={styles.paragraphB}>{sampledata.response.docs[0].lead_paragraph}</Text>
      
      <View style={styles.full}>
        <Text style={styles.read}>Read the full article: </Text>
        <Text style={styles.url}>{sampledata.response.docs[0].web_url}</Text>
      </View>
    </View>
  )
}

   return (
     <View style={styles.container}>
      {!article?(
        <FlatList
        data={headlines}
        renderItem={({item}) => <Story image={item.multimedia[2].url} title={item.title} abstract={item.abstract} url={item.url}/>}
        keyExtractor={(item, index) => index}
        />
      ):
      <Article/>
      }
     </View>
   );
 };
 
 const styles = StyleSheet.create({
   container:{
     width: '100%',
     height: 550,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: 'black',
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
   article:{
    height: 1000,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center', 
   },
   badge:{
    width: 128,
    height: 128,
    position: 'absolute',
    transform: [{translateX: -150}, {translateY: -180}],
   },
   articleTitle:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 22,
    paddingRight: 50,
    position: 'absolute',
    transform: [{translateX: 55}, {translateY: -340}],
    paddingLeft: 10,
   },
   byline:{
    fontSize: 15,
    transform: [{translateY: -280}],
    paddingRight: 20,
    paddingLeft: 10,
    position: 'absolute',
   },
   articleImage:{
    width: 370,
    height: 200,
    position: 'absolute',
    transform: [{translateY: -140}],
   },
   paragraphA:{
    fontSize: 18,
    transform: [{translateX: 5}, {translateY: 60}],
    paddingRight: 20,
    color: '#000000',
   },
   paragraphB:{
    fontSize: 18,
    transform: [{translateX: 10}, {translateY: 80}],
    paddingRight: 20,
    color: '#000000'
   },
   full:{
    transform: [{translateX: -20}, {translateY: 100}],
   },
   read:{
    color: '#000000',
    fontWeight: 'bold',
   },
   url:{
    color: 'blue',
    textDecorationLine: 'underline',
    fontStyle: 'italic',
   }
});
 
export default Headlines;
 