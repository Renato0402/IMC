
import React from 'react';
import {Text,TextInput,View,StyleSheet} from 'react-native';

export default function(props){

    return(
        
      <View style={styles.bloco}>
            <Text>Informe a sua Altura:</Text>
            <TextInput
            
            style={styles.txt}
            autoFocus={true}
            keyboardType={'numeric'}
            onChangeText={(text)=>{
                props.altura(text)
            }}

      />
    </View>
    )
}

const styles = StyleSheet.create({
    
    txt:{
       width:'100%',
       borderWidth:1,
       borderColor:"#000",
       padding:10,
       borderRadius:10,
       textAlign:'center'
     },
 
     bloco:{
       marginBottom:20
     },
    
 })
 