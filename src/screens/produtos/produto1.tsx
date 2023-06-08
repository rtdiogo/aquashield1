import React from 'react';
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native';
import produto1 from './../../assets/pictures/500ml.jpg';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

export interface ProductScreen1Props {
  route: RouteProp<NavegacaoPrincipalParams, "ProductScreen1">
}

export default function ProductScreen1(props: ProductScreen1Props) {

  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "ProductScreen1">;
  const navigation = useNavigation<navProp>();

  const { produto } = props.route.params;

  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.image}  />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{produto.nome}</Text>
        <Text style={styles.price}>{produto.preco}</Text>
        <View style={styles.linha} />
        <Text style={styles.description}> {produto.descricao} </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.butaocomprar}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('FormaPagamento')}>Comprar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.carrinho}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('HomeScreen')}>Voltar para home </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fad2',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  linha: {
    height: 1,
    width: '100%',
    backgroundColor: '#ccc',
    marginVertical: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  butaocomprar: {
    backgroundColor: '#0080ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  carrinho: {
    backgroundColor: '#0080ff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
