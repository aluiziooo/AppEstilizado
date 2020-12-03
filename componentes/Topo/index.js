import React from 'react';
import { View, Text, Image } from 'react-native';
import estilo from './estilo'
import churrasco from '../../assets/churrasco.png';

export default function Topo() {
  return (
    <View style={estilo.box}>
      <Image style={estilo.boxIcone} source = { churrasco } />

      <View>
        <Text style={estilo.boxTitulo}>Churrasco em casa</Text>
        <Text style={estilo.boxSubtitulo}>Calculando a comida e a bebida</Text>
      </View>
    </View>
  )
}
