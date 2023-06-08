import * as React from 'react';
import {TextInput, View, Text, Button, ActivityIndicator, TouchableOpacity, ImageBackground, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import bg from './../../assets/pictures/bg.jpg';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';


export interface LoginScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "LoginScreen">
}

const loginValidacao = Yup.object().shape({
  email: Yup.string().email('Digite um e-mail correto').required('Campo obrigatório'),
  senha: Yup.string().min(6, 'A senha deve conter ao menos 6 caracteres').required('Campo obrigatório'),
});

export default function LoginScreen() {

  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "LoginScreen">;
  const navigation = useNavigation<navProp>();
  const auth = getAuth();

  const handleSubmit = async ({email, senha}:any) => {
    await signInWithEmailAndPassword(auth, email, senha)
    .then((usuario) => {
      navigation.navigate('HomeScreen');
      return usuario;
    }).catch(erro => Alert.alert('Erro', 'Login ou senha incorreta!'));
  };

  return (
  <ImageBackground  source={bg} style={{ height: '130%', padding: 20, justifyContent: 'center', flex: 1}}>
    <View style={styles.container}>
        <Text style={styles.titulo}>Login</Text>
      <Formik initialValues={{ email: '', senha: ''}} validationSchema={loginValidacao} onSubmit={handleSubmit}>
        {({handleChange, touched, handleBlur, values, handleSubmit, errors}) => (<>
            <TextInput placeholder="E-mail" style={styles.input} onChangeText={handleChange('email')} onBlur={handleBlur('email')} 
            value={values.email}/>
            {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            <TextInput placeholder="Senha" style={styles.input} onChangeText={handleChange('senha')}onBlur={handleBlur('senha')}
            value={values.senha}secureTextEntry/>
            {errors.senha && touched.senha && (<Text style={styles.errorText}>{errors.senha}</Text>)}
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
        <View style={styles.footer}>
        <Text style={styles.footerText}>© Aquashield - Todos os direitos reservados</Text>
        <Text style={styles.footerText}>Contato: contato@aquashield.com.br | (82) 99999-0000</Text>
      </View>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
    titulo: {
    height: 60,
    color: 'white',
    fontSize: 30,
    textAlign: 'center'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    paddingHorizontal: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#1b8798',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 8,
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