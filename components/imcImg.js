
import React from 'react';
import {Image,View,StyleSheet} from 'react-native';

export default function(props){

    return(
        
       
        <View style={styles.bloco}>

        <Image
        
        source={require('../assets/imc.png')}
        style={styles.img}
        
        />
        </View>
      
    )
}


const styles = StyleSheet.create({
    
  
     bloco:{
       marginBottom:20
     },
 
     img:{
       width:'100%',
       height:undefined,
       aspectRatio:1,
       resizeMode:'contain',
       marginTop:-30
       
     }
 })
 