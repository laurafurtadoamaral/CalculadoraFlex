import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RadioButton, TextInput, Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";

import Header from "./../components/header";
import Container from "./../components/container";
import Body from "./../components/Body";
import Input from "./../components/Input";

const Abastecimento = ({ route }) => {
  const { item } = route.params ? route.params : {};
  const navigation = useNavigation();

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [tipo, setTipo] = useState("gas");
  const [preco, setPreco] = useState("");
  const [valor, setValor] = useState("");
  const [odometro, setOdometro] = useState("");
  const [data, setData] = useState(moment(new Date()).format("DD/MM/YYYY"));
  //const [id, setId] = useState("gas");

  useEffect(() => {
    if (item) {
      setTipo(item.tipo == 0 ? "gas" : "eta");
      setPreco(item.preco.toString());
      setValor(item.valor.toString());
      setOdometro(item.odometro.toString());
      setData(item.data);
    }
  }, [item]);

  const handleSalvar = () => {
    alert("Salvo");
  };

  const handleExcluir = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <Header title={"Abastecimento"} goBack={() => navigation.goBack()}>
        <Appbar.Action
          icon="check-bold"
          color={"white"}
          onPress={handleSalvar}
        />
        {item && (
          <Appbar.Action
            icon="trash-can"
            color={"white"}
            onPress={handleExcluir}
          />
        )}
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
            display="spinner"
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
              style={styles.input}
              label="Data"
              value={data}
              left={<TextInput.Icon icon="calendar-month" color={"purple"} />}
              editable={false}
              pointerEvents="none" // para não bloquear eventos de toque, libera o TouchableOpacity
            />
          </TouchableOpacity>

          <Input
            label="Preço"
            value={preco}
            onChangeText={(text) => setPreco(text)}
            left={<TextInput.Icon icon="currency-brl" color={"purple"} />}
          />
          <Input
            label="Valor"
            value={valor}
            onChangeText={(text) => setValor(text)}
            left={<TextInput.Icon icon="currency-brl" color={"purple"} />}
          />
          <Input
            label="Hodômetro"
            value={odometro}
            onChangeText={(text) => setOdometro(text)}
            left={<TextInput.Icon icon="gauge-full" color={"purple"} />}
          />
          <View style={styles.container_buttons}>
            <Button
              buttonColor={"green"}
              mode="contained"
              onPress={handleSalvar}
            >
              Salvar
            </Button>
            {item && (
              <Button
                buttonColor={"red"}
                mode="contained"
                onPress={handleExcluir}
              >
                Excluir
              </Button>
            )}
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
