import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Axios from 'axios';

export default function App() {
  /*
  const [userList, userListFlag] = useState([]);
  const [productList, productListFlag] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getuser').then((response) => {
      userListFlag(response.data);
    })
  }, []);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/getprodotto').then((response) => {
      productListFlag(response.data);
    })
  }, []);

  <Text>UTENTI REGISTRATI</Text>
  <StatusBar style="auto" />
  {userList.map((val) => {
    return <Text>Nome: {val.nome} | Cognome: {val.cognome}</Text>;
  })}
  <Text>PRODOTTI REGISTRATI</Text>
  {productList.map((val) => {
    return <Text>Nome: {val.nome_prodotto} | Costo: {val.costo_unitario_prodotto}</Text>;
  })}
  */
  return (
    <View style={styles.container}>
      <Text>CIAO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
