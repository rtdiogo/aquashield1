import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';

export interface FormaPagamentoProps {
  route: RouteProp<NavegacaoPrincipalParams, "FormaPagamento">
}

export default function FormaPagamento() {

  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "FormaPagamento">;
  const navigation = useNavigation<navProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Formas de Pagamento</Text>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText} onPress={() => navigation.navigate('CadastroCartao')} >Cartão de Crédito</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText}>Pix</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText}>Boleto Bancário</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.botaoText}>Transferência Bancária</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoVoltar}>
        <Text style={styles.botaoText} onPress={() => navigation.navigate('HomeScreen')} >Cadastrar Frete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoVoltar}>
        <Text style={styles.botaoText} onPress={() => navigation.navigate('HomeScreen')} >Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fad2',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#ddd',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  //botaoFinalizar: {
    //backgroundColor: '#0080ff',
    //padding: 20,
    //borderRadius: 5,
    //marginBottom: 10,
  //},
  botaoVoltar: {
    backgroundColor: '#0080ff',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  botaoText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
