import * as React from 'react';
import { NavegacaoPrincipal } from './src/screens/navegation';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './src/config/configfirebase';


export default function App() {
  initializeApp(firebaseConfig);
  return (<NavegacaoPrincipal/>)
}