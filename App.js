import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const imageInicial = require('./assets/image1.png')
const image02 = require('./assets/image2.png')
const image03 = require('./assets/image3.png')

export default function App() {

  const [imageChoice, setImageChoice] = useState(1)

  function choiceImage() {
    if (imageChoice == 1) {
      return imageInicial
    } if (imageChoice == 2) {
      return image02
    } if (imageChoice == 3) {
      return image03
    }
  }


  function router() {
    if (imageChoice == 1) {
      return
    } if (imageChoice == 2) {
      console.log("Navegar para: cortar meu cabelo");
      return
    } if (imageChoice == 3) {
      console.log("Navegar para: encontrar cliente");
      return
    }
  }


  return (
      <View>
        <Image
          style={styles.imageTop}
          source={choiceImage()}
        />


        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { (setImageChoice(2)) }} style={{ borderColor: imageChoice === image02 ? "green" : "#d3d3d3" }}>
            <Image
              source={require('./assets/icon1.png')} />
            <Text style={styles.txt}>Cortar meu Cabelo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { (setImageChoice(3)) }} style={{ borderColor: imageChoice === image03 ? "green" : "#d3d3d3" }}>
            <Image
              source={require('./assets/icon2.png')} />
            <Text>Encontrar Clientes</Text>
          </TouchableOpacity>
        </View>

      <TouchableOpacity onPress={() => { router() }} style={{ backgroundColor: imageChoice === imageInicial ? "#d3d3d3" : "green" }}>
        <Text style={{ color: imageChoice === imageInicial ? "black" : "white" }}>
          Começar</Text>
      </TouchableOpacity>

    </View >
  )
};

