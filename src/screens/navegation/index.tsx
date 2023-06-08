import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BemVindo from '../bemvindo/index';
import LoginScreen  from '../login/index';
import CadastroScreen  from '../cadastro/index';
import HomeScreen from '../home/index';
import ProductScreen1 from '../produtos/produto1';
import FormaPagamento from '../formapagamento/index';
import CadastroCartao from '../cadastrarCartao/index';
import Agradecimento from '../agradecimento/index';
import Configuracoes from '../configuracoes/index';


export type NavegacaoPrincipalParams = {
    BemVindo: undefined,
    LoginScreen:undefined,
    CadastroScreen:undefined,
    HomeScreen: undefined,
    ProductScreen1: undefined,
    FormaPagamento: undefined,
    CadastroCartao: undefined,
    Agradecimento: undefined,
    Configuracoes: undefined,
}

const Stack = createStackNavigator<NavegacaoPrincipalParams>();

export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="BemVindo" component={BemVindo} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="ProductScreen1" component={ProductScreen1} />
            <Stack.Screen name="FormaPagamento" component={FormaPagamento} />
            <Stack.Screen name="CadastroCartao" component={CadastroCartao} />
            <Stack.Screen name="Agradecimento" component={Agradecimento} />
            <Stack.Screen name="Configuracoes" component={Configuracoes} />
        </Stack.Navigator>
    </NavigationContainer>
)