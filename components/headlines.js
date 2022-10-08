/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect} from 'react';
 import {StyleSheet, View, Image, Text, FlatList, TouchableOpacity, ScrollView} from 'react-native';
 import axios from 'axios'
 import {key} from '../sensitive.js'
//import {sampledata} from '../article_sample.js'

 const Headlines = ({headlines}) => {
  const [article, setArticle] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=web_url:("' + article + '")&api-key=' + key)
        if(response.data){
         setData(response.data)
        }
    }
   if(article) fetchData()
  }, [article])

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
  return(
    <View style={styles.article}>

    <View style={styles.badgeContainer}>
      <TouchableOpacity style={styles.imageContainer} onPress={()=>setArticle('')}>
        <Image style={styles.badge} source={require('../assets/badge.png')}/>
      </TouchableOpacity>
    </View>

    <View style={styles.titleContainer}>
      <Text style={styles.articleTitle}>{data?.response.docs[0].headline.main}</Text>
    </View>

    <View style={styles.bylineContainer}>
      <Text style={styles.byline}>{data?.response.docs[0].pub_date.slice(0,10)} | {data?.response.docs[0].byline.original}</Text>
    </View>  

    <View style={styles.articleImageContainer}>
      <Image style={styles.articleImage} source={{uri: 'https://static01.nyt.com/' + data?.response.docs[0].multimedia[0].url}}/>      
    </View>  

    <View style={styles.parAContainer}>
      <Text style={styles.parText}>{data?.response.docs[0].abstract}</Text> 
    </View>  
    <View style={styles.parBContainer}>
      <Text style={styles.parText}>{data?.response.docs[0].lead_paragraph}</Text>
    </View>  
      <View style={styles.full}>
        <Text style={styles.read}>Read the full article: </Text>
        <Text style={styles.url}>{data?.response.docs[0].web_url}</Text>
      </View>
    </View>
  )
}

   return (
     <View style={styles.container}>
      {!article?(
        <FlatList
        data={headlines}
        renderItem={({item}) => <Story image={item?.multimedia[2].url} title={item?.title} abstract={item?.abstract} url={item?.url}/>}
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
     position: 'absolute',
     transform: [{translateY: 20}],
     zIndex: 1,
     backgroundColor: '#FFFFFF',
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
    borderTopWidth: 3,
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
   badgeContainer:{
    width: 80,
    height: 100,
    paddingLeft: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center', 
    position: 'absolute',
    transform: [{translateX: -160}, {translateY: -330}],
   },
   badge:{
    width: 128,
    height: 128,
   },
   titleContainer:{
    width: 320,
    height: 110,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{translateX: 40}, {translateY: -330}],
    backgroundColor: '#FFFFFF',
   },
   articleTitle:{
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 20,
   },
   bylineContainer:{
    width: 400,
    height: 40,
    //backgroundColor: 'yellow',
    transform: [{translateX: 0}, {translateY: -260}],
    paddingLeft: 15,
    position: 'absolute',
   },
   byline:{
    fontSize: 15,
   },
   articleImageContainer:{
    width: 600,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    transform: [{translateY: -140}],
    //backgroundColor: 'green'
   },
   articleImage:{
    width: 370,
    height: 200,
   },
   parAContainer:{
    width: 400,
    height: 120,
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    paddingLeft: 15,
    //backgroundColor: 'pink',
    transform: [{translateY: 20}],
    paddingRight: 15,
   },
   parText:{
    fontSize: 18,
    color: '#000000',
    textAlign: 'left'
   },
   parBContainer:{
    width: 400,
    height: 200,
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'absolute',
    paddingLeft: 15,
    transform: [{translateY: 180}],
    paddingRight: 15,
    //backgroundColor: 'purple',
   },
   full:{
    width: 400,
    height: 60,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
    transform: [{translateY: 300}],
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
 