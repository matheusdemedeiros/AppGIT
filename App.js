import React from 'react';
import Page1 from './src/Page1';
import Page2 from './src/Page2';
import Inicial from './src/Inicial';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

var ip = '192.168.56.1';
class Banco extends React.Component{
    constructor(props){
        this.state = {
            nome: '',
            sobrenome: '',
            idade: '',
            vetor:[]
        }
    }
  }

//Criando o container que possui o objeto navegador, este por sua
//vez contem as telas

const Routes = createAppContainer(
  
  createStackNavigator({
    Home: Inicial,
    Cadastro: Page1,
    Listagem: Page2
   })
);

export default Routes;