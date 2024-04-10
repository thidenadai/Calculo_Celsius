import { View, Text } from "react-native";
import TxtInputComponent from "../components/TxtInputComponent";
import { styles } from "../styles/Style";
import React, { useState } from "react";

export default function Home() {
  const [celsius, setCelsius] = useState("");

  const resultado = (txt) => {
    const result = (txt * 9) / 5 + 32;
    setCelsius(result);
  };
  return (
    <View style={styles.container}>
      <Text>Em Celsius:</Text>
      <TxtInputComponent
        styleInput={styles.input}
        txtplace="Digite a temperatura em C°"
        changeText={resultado}
      />
      <Text>Em Fahrenheit:</Text>
      <Text style={styles.resultado}>{celsius}</Text>
    </View>
  );
}
