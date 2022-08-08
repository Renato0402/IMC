
import React, {useState} from 'react';
import { StyleSheet, Text, SafeAreaView,TouchableHighlight,TextInput,View,Image } from 'react-native';
import StatusBar from './components/StatusBar';
import Peso from './components/Peso';
import Altura from './components/Altura';
import BtnCalcular from './components/btnCalcular';
import Resultado from './components/resultado'
import Tabela from './components/imcImg'


export default function calcimc() {

  const [peso,setPeso] = useState(0)
  const [altura,setAltura] = useState(0)
  const [resultado,setResultado] = useState(0)

  const calcImc = () =>{
      
    if( peso == 0 || !peso){
      alert("Informe o peso")
      return
    }
    if( altura == 0 || !altura){
      alert("Informe a altura")
      return
    }

    const result = peso/altura**2

    setResultado(result.toFixed(1))
  }

  return (
    <SafeAreaView style={styles.corpo}>
      <StatusBar/>

      <View style={styles.bloco}>
      <Text>Calculadora de IMC</Text>
      </View>

      <Peso peso={setPeso}/>

      <Altura altura={setAltura}/>
      
      <BtnCalcular calc={calcImc}/>
      
      <Resultado res={resultado}/>
      
      <Tabela/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    
   corpo:{
     padding:10
   },

    bloco:{
      marginBottom:20
    },
   
})
