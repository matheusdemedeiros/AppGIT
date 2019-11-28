import Page1 from './src/Page1';
import Page2 from './src/Page2';
import Inicial from './src/Inicial';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Login: Inicial,
    Cadastro: Page1,
    Listagem: Page2
  })
)

export default Routes;