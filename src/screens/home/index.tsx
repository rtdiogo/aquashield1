import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from '../navegation/index';
import { StackNavigationProp } from '@react-navigation/stack';

export interface HomeScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, 'HomeScreen'>;
}

export type Produto = {
  id: number;
  nome: string;
  preco: number;
  imagem: string;
  descricao: string;
};

const produtos = [
  {
    id: 1,
    nome: 'Garrafa 500ml',
    preco: '69,90',
    imagem: require('./../../assets/pictures/500ml.jpg'),
    descricao: 'Garrafa autolimpante com resistência a queda.',
  },
  {
    id: 2,
    nome: 'Garrafa 750ml',
    preco: '89,90',
    imagem: require('./../../assets/pictures/750ml.jpg'),
    descricao: 'Garrafa autolimpante com filtro integrado de 750ml.',
  },
  {
    id: 3,
    nome: 'Copo Especial',
    preco: '40,00',
    imagem: require('./../../assets/pictures/copoper.jpg'),
    descricao:
      'Copo com filtro e produto térmico que promete até 12h mantendo a temperatura.',
  },
  {
    id: 4,
    nome: 'Xícara Térmica',
    preco: '30,00',
    imagem: require('./../../assets/pictures/xicaraper.jpg'),
    descricao: 'Promete longa duração para manter a temperatura do seu café.',
  },
  {
    id: 5,
    nome: 'Caneca Programmer',
    preco: '29,90',
    imagem: require('./../../assets/pictures/xicaraprogramer.jpg'),
    descricao: 'Para os devs de plantão.',
  },
  {
    id: 6,
    nome: 'Xícara Mixer',
    preco: '40,00',
    imagem: require('./../../assets/pictures/xicaratermicaquente.jpg'),
    descricao: 'Nunca mais use uma colher na vida com essa xícara mixer.',
  },
  {
    id: 7,
    nome: 'Garrafa Filtro',
    preco: '60,00',
    imagem: require('./../../assets/pictures/500mlreserva.jpg'),
    descricao: 'Garrafa com filme filtro removível.',
  },
  {
    id: 8,
    nome: 'Botijão',
    preco: '100,00',
    imagem: require('./../../assets/pictures/garrafa2l.jpg'),
    descricao: 'Garrafa moderna com 2 litros.',
  },
];

export default function HomeScreen(props: any) {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, 'HomeScreen'>;
  const navigation = useNavigation<navProp>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Home</Text>
        <Text style={styles.text}>Catálogo</Text>
        <Text style={styles.text} onPress={() => navigation.navigate('Configuracoes')}>Opções</Text>
      </View>

      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.produtosContainer}
        data={produtos}
        renderItem={({item}:any) => (
          <View style={styles.produto}>
            <Image source={item.imagem} style={styles.produtoImagem} />
            <Text style={styles.produtoNome}>{item.nome}</Text>
            <Text style={styles.produtoPreco}>R$ {item.preco}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={styles.buttonText}
                  onPress={() =>
                    navigation.navigate('ProductScreen1', { produto: item })
                  }>
                  Comprar{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fad2',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fdd86e',
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  produtosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  produto: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2,
    elevation: 3,
  },
  produtoImagem: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  produtoNome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  produtoPreco: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },
  button: {
    backgroundColor: '#fdd86e',
    borderRadius: 15,
    paddingVertical: 3,
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
