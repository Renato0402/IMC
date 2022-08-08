
import React from 'react';
import {Text,TouchableHighlight,View,StyleSheet} from 'react-native';

export default function(props){

    return(
        
        <View style={styles.bloco}>
            <TouchableHighlight

            style={styles.botaoCalc}
            onPress={()=>{
            props.calc()
            }}

            >
            <Text style={styles.txtBtn}>Calcular IMC</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    
     bloco:{
       marginBottom:20
     },
     botaoCalc:{
       backgroundColor:'#048',
       justifyContent:'center',
       alignItems:'center',
       padding:10,
       borderRadius:20
      
     },
 
     txtBtn:{
       fontSize:15,
       textTransform:'uppercase',
       color:'#fff',
       
     },
 
 })