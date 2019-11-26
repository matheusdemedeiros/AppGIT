import React from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo ao AppGIT</Text>
      <TextInput style={styles.inputUserGIT} placeholder=" Informe seu usuário do GitHub"></TextInput>
      <Button style={styles.buttonConfirm} title="Confirmar"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color:'white'
  },
  inputUserGIT:{
    marginTop:4,
    height: 50,
    width:380,
    backgroundColor:'white',
    borderColor: 'black',
    borderWidth: 2
  },
  buttonConfirm:{
    marginTop: 8,
    height: 100,
    width: 100,
    backgroundColor:"#5555"
    
  }
  

});
