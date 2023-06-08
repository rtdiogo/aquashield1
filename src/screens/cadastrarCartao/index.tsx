import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';

export interface CadastroCartaoProps {
  route: RouteProp<NavegacaoPrincipalParams, "CadastroCartao">
}



export default function CadastroCartao() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "CadastroCartao">;
  const navigation = useNavigation<navProp>();

  return (
    
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Cartão</Text>
      <TextInput style={styles.input} placeholder="Número do Cartão" />
      <TextInput style={styles.input} placeholder="Nome do Titular" />
      <TextInput style={styles.input} placeholder="Validade" />
      <TextInput style={styles.input} placeholder="Código de Segurança" />
      <TextInput style={styles.input} placeholder="Número de parcelas" />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.butaocomprar}>
            <Text style={styles.buttonText}>Usar existente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.carrinho}>
            <Text style={styles.buttonText} onPress={() => navigation.navigate('Agradecimento')}>Finalizar </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fad2',
    padding: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10
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
