import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navegation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { getFirestore, setDoc, doc } from '@firebase/firestore';


export interface CadastroScreenProps {
  route: RouteProp<NavegacaoPrincipalParams, "CadastroScreen">
}

export default function CadastroScreen() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "CadastroScreen">;

  const navigation = useNavigation<navProp>();
  const auth = getAuth();
  const db = getFirestore();

  const manipularCadastro = async ({email, senha, confirmarSenha, cpf}:any) => {
    if (senha !== confirmarSenha) {
      Alert.alert('confirmarSenha', 'Senhas diferentes');
      return;
    }
    else if (senha.length < 6) {
      Alert.alert('senha', 'A senha deve ter pelo menos 6 dígitos');
      return;
    }
    else if (cpf.length < 11) {
      Alert.alert('cpf', 'CPF incorreto');
      return;
    }
    
    else {
      await createUserWithEmailAndPassword(auth, email, senha, cpf)
      .then((usuario) => {

          setDoc(doc(db, 'usuarios', usuario.user.uid), {
            email, senha, cpf
          })
          navigation.navigate('LoginScreen')
      }).catch(erro => Alert.alert('Erro', 'Não foi possivel criar o usuário, tente novamente'))}    
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.title}>cadastro cliente</Text>
      <Formik initialValues={{ email: '', cpf: '', senha: '', confirmarSenha: '' }} onSubmit={manipularCadastro}>
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          
          <View style={styles.formContainer}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="E-mail" onChangeText={handleChange('email')}onBlur={handleBlur('email')}
                value={values.email}/>
                {errors.email && touched.email && <Text style={styles.errorText}>{errors.email}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Digite seu CPF" onChangeText={handleChange('cpf')} 
              onBlur={handleBlur('cpf')}value={values.cpf}/>
              {errors.cpf && touched.cpf && <Text style={styles.errorText}>{errors.CPF}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Senha" onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} 
              value={values.senha}secureTextEntry={true}/>
              {errors.senha && touched.senha && <Text style={styles.errorText}>{errors.senha}</Text>}
            </View>
            
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder="Confirmar senha" onChangeText={handleChange('confirmarSenha')} onBlur={handleBlur('confirmarSenha')}
                value={values.confirmarSenha} secureTextEntry={true}/>
              {errors.confirmarSenha && touched.confirmarSenha && <Text style={styles.errorText}>{errors.confirmarSenha}</Text>}
            </View>
            
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('BemVindo')}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>


          </View>
          
        )}
        
      </Formik>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4fad2',
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0.8,
    backgroundColor: '#e9e0d1',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  inputContainer: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: 'rgb(26, 41, 128)',
  },
  button: {
    backgroundColor: '#3CB371',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
 marginTop: 32,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
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
