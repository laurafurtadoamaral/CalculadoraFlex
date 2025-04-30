import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton, TextInput, Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import Header from "./../components/header";
import Container from "./../components/container";
import Body from "./../components/Body";
import Input from "./../components/Input";

const Abastecimento = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState("gas");
  const [preco, setPreco] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [odometro, setOdometro] = useState("");
  //const [id, setId] = useState("gas");

  const handleSalvar = () => {
    alert("Salvo");
  };

  const handleExcluir = () => {
    navigation.goBack();
  };

  const Oi = () => {
    alert("Oi!");
  };

  return (
    <Container>
      <Header title={"Abastecimento"} goBack={() => navigation.goBack()}>
        <Appbar.Action
          icon="check-bold"
          color={"white"}
          onPress={handleSalvar}
        />
        <Appbar.Action
          icon="trash-can"
          color={"white"}
          onPress={handleExcluir}
        />
      </Header>

      <Body>
        <View style={styles.container_radio}>
          <View style={styles.container_radio_item}>
            <RadioButton
              color="orange"
              backgroundColor="#fff"
              value="first"
              status={tipo === "gas" ? "checked" : "unchecked"}
              onPress={() => setTipo("gas")}
            />
            <Text>Gasolina</Text>
          </View>
          <View style={styles.container_radio_item}>
            <RadioButton
              color="green"
              backgroundColor="#fff"
              value="second"
              status={tipo === "eta" ? "checked" : "unchecked"}
              onPress={() => setTipo("eta")}
            />
            <Text>Etanol</Text>
          </View>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onTouchCancel={() => setShow(false)}
            onChange={(event, date) => {
              setShow(false);
              setData(moment(date).format("DD/MM/YYYY"));
            }}
          />
        )}
        <View style={styles.container_inputs}>
          <TouchableOpacity onPress={() => setShow(true)}>
            <Input
              label="Data"
              value={data}
              left={<TextInput.Icon icon="calendar-month" color={"yellow"} />}
              editable={false}
              pointerEvents="none" // para não bloquear eventos de toque
            />
          </TouchableOpacity>

          <Input
            label="Preço"
            value={preco}
            onChangeText={(text) => setPreco(text)}
            left={<TextInput.Icon icon="currency-brl" color={"yellow"} />}
          />
          <Input
            label="Valor"
            value={valor}
            onChangeText={(text) => setValor(text)}
            left={<TextInput.Icon icon="currency-brl" color={"yellow"} />}
          />
          <Input
            label="Hodômetro"
            value={odometro}
            onChangeText={(text) => setOdometro(text)}
            left={<TextInput.Icon icon="gauge-full" color={"yellow"} />}
          />
          <View style={styles.container_buttons}>
            <Button
              buttonColor={"green"}
              mode="contained"
              onPress={handleSalvar}
            >
              Salvar
            </Button>
            <Button
              buttonColor={"red"}
              mode="contained"
              onPress={handleExcluir}
            >
              Excluir
            </Button>
          </View>
        </View>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container_radio: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  container_radio_item: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container_inputs: {
    gap: "1%",
    //alignItems: "center",
  },
  container_buttons: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "5%",
    gap: "10%",
  },
});

export default Abastecimento;
