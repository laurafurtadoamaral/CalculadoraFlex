import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import { List } from "react-native-paper";
import { FAB } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Header from "./../components/header";
import Container from "./../components/container";
import Body from "./../components/Body";

const DATA = [
  {
    id: "1",
    tipo: 0,
    preco: 5.76,
    valor: 157.65,
    data: "12/03/2025",
    odometro: 46783,
  },
  {
    id: "2",
    tipo: 1,
    preco: 4.53,
    valor: 97.46,
    data: "27/03/2025",
    odometro: 47315,
  },
  {
    id: "3",
    tipo: 0,
    preco: 5.68,
    valor: 169.53,
    data: "07/04/2025",
    odometro: 47633,
  },
];

const renderItem = ({ item }) => (
  <List.Item
    title={
      (item.tipo == 0 ? "Gasolina" : "Etanol") +
      " - R$ " +
      item.valor.toFixed(2)
    }
    description={
      "R$ " +
      item.preco.toFixed(2) +
      " /L      " +
      item.odometro.toLocaleString("pt-BR") +
      " km"
    }
    left={(props) => (
      <List.Icon
        {...props}
        color={item.tipo == 0 ? "orange" : "green"}
        icon="gas-station"
      />
    )}
    right={(props) => (
      <Text {...props} style={{ alignSelf: "center" }}>
        {item.data}
      </Text>
    )}
  />
);

const Gastos = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header title={"Fuel Manager"}></Header>
      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <FAB
          icon="plus"
          style={styles.fab}
          onPress={() => navigation.navigate("Abastecimento")}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;
