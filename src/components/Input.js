import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = (props) => {
  return (
    <TextInput
      mode="outlined"
      //outlineColor="purple" // Cor da borda do input quando não focado
      style={style.input}
      keyboardType="decimal-pad"
      /*
              theme={{
        colors: {
          primary: "yellow", // altera a borda do placeholder quando estiver focado
          background: "darkgray", // Cor de fundo do input (place holder)
        },
      }}
        */
      //placeholder="R$ 0,00"
      // textColor="#fff" // do Place Holder
      {...props}
    />
  );
};

const style = StyleSheet.create({
  input: {
    fontSize: 20,
  },
});

export default Input;
