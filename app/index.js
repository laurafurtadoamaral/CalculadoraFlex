import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Appbar, TextInput, Button } from "react-native-paper";

const App = () => {
  /*Funções do TextInput */
  const [gas, setGas] = React.useState("");
  const [eta, setEta] = React.useState("");

  /*Funções do Text - resposta do cálculo */
  const [resp, setResp] = React.useState("");

  return (
    <SafeAreaProvider>
      {/* Para o teclado sumir ao clickar em qualquer lugar da tela */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={style.container}>
          {/*Header*/}
          <Appbar.Header style={style.header}>
            <Appbar.Content
              title="Calculadora Flex"
              titleStyle={style.header_title}
            />
          </Appbar.Header>
          <View style={style.corpo}>
            <TextInput
              mode="outlined"
              outlineColor="purple" // Cor da borda do input quando não focado
              style={style.text_input}
              label="Preço da Gasolina"
              theme={{
                colors: {
                  primary: "yellow", // altera a borda do placeholder quando estiver focado
                  background: "darkgray", // Cor de fundo do input (place holder)
                },
              }}
              placeholder="R$ 0,00"
              textColor="#fff" // do Place Holder
              value={gas}
              onChangeText={(text) => setGas(text)}
            />
            <TextInput
              mode="outlined"
              outlineColor="purple" // Cor da borda do input quando não focado
              style={style.text_input}
              label="Preço do Etanol"
              theme={{
                colors: {
                  primary: "yellow", // altera a borda do placeholder quando estiver focado
                  background: "darkgray", // Cor de fundo do input (place holder)
                },
              }}
              placeholder="R$ 0,00"
              textColor="#fff" // do Place Holder
              value={eta}
              onChangeText={(text) => setEta(text)}
            />
            <Button
              style={{ marginTop: 20 }}
              labelStyle={{ fontSize: 18 }}
              icon="calculator"
              mode="contained"
              onPress={() => alert("Apertou")}
            >
              Calcular
            </Button>
            <Text style={style.text_calculo}>
              {" "}
              Melhor opção: {gas} {eta}
            </Text>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </SafeAreaProvider>
  );
};

/*

--------------------------------------
--------------------------------------
--------------------------------------
--------------------------------------
--------------------------------------

*/

const style = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "lightblue",
  },

  header: {
    backgroundColor: "purple",
  },

  header_title: {
    fontSize: 24,
    color: "#fff",
  },

  corpo: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: "lightgray",
  },

  text_input: {
    fontSize: 20,
  },

  text_calculo: {
    fontSize: 24,
    paddingTop: 10,
    textAlign: "center",
  },
});

export default App;
