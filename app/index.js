import React, { useState } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

import Container from "../src/components/container";
import Header from "../src/components/header";
import Body from "../src/components/Body";
import Input from "../src/components/Input";

const App = () => {
  /*Funções do TextInput */
  const [gas, setGas] = React.useState("");
  const [eta, setEta] = React.useState("");

  /*Funções do Text - resposta do cálculo */
  const [resp, setResp] = React.useState("");

  /* Função de validação dos inputs */
  const handleCalcular = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      Alert.alert(
        "Atenção",
        "Obrigatório informar os valores para Gasolina e Etanol"
      );
    } else {
      let pct = parseFloat(((eta / gas) * 100).toFixed(1));
      pct = pct >= 70 ? "Utilize Gasolina" : "Utilize Etanol";
      setResp(pct);
    }
  };

  return (
    <SafeAreaProvider>
      <Container>
        <Header title={"Calculadora Flex"}></Header>
        <Body>
          <Input
            label="Preço da Gasolina"
            value={gas}
            onChangeText={(text) => setGas(text)}
          />
          <Input
            label="Preço do Etanol"
            value={eta}
            onChangeText={(text) => setEta(text)}
          />
          <Button
            style={{ marginTop: 20 }}
            labelStyle={{ fontSize: 18 }}
            icon="calculator"
            mode="contained"
            onPress={handleCalcular}
          >
            Calcular
          </Button>
          <Text style={style.text_calculo}>{resp}</Text>
        </Body>
      </Container>
    </SafeAreaProvider>
  );
};

const style = StyleSheet.create({
  text_calculo: {
    fontSize: 24,
    paddingTop: 10,
    textAlign: "center",
  },
});

export default App;
