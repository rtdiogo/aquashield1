import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Agradecimento() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Obrigado pela sua compra!</Text>
        <Text style={styles.subtitulo}>Seu número de pedido é:</Text>
        <Text style={styles.numeropedido}>14352549</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>Seu pedido será enviado em breve. Fique atento ao seu e-mail para mais informações.</Text>
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
    backgroundColor: '#FFD700',
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 18,
    color: '#FFF',
  },
  numeropedido: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 5,
  },
  body: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
});
