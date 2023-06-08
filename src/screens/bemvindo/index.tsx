import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import logo from './../../assets/pictures/logo.jpg';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';

export interface BemvindoScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "BemVindo">
}


export default function BemVindo() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "Bemvindo">;
  const navigation = useNavigation<navProp>();

  return (
     <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Bem-Vindo(a) à AquaShield</Text>
       <Text style={styles.subtitle}>Sua fonte de energia</Text>
      </View>
       <View style={styles.logoContainer}>
       <Image source={logo} style={styles.logo}/>
      </View>
      <View style={styles.botaoContainer}>
        <Button title="Já sou cliente" style={styles.botao} onPress={() => navigation.navigate('LoginScreen')}/>
        <Button title="Quero me cadastrar" style={styles.botao} onPress={() => navigation.navigate('CadastroScreen')} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Aquashield - Todos os direitos reservados</Text>
        <Text style={styles.footerText}>Contato: contato@aquashield.com.br | (82) 99999-0000</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fad2',
    alignItems: 'center',
    justifyContent: 'center',
  },
    header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
    
  },
  // title: {
  //   fontSize: 24,
  //   // fontWeight: 'bold',
  // },
  // botaoContainer: {
  // marginTop: 50,
  // },
  
  botaoContainer: {
    // marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    // flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 20,
  },
  botao: {
    color: '#fff',
    marginHorizontal: 10,

  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 12,
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 5,
  },
});