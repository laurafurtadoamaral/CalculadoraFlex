import React from "react";
import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Header from "./../components/header";
import Container from "./../components/container";
import Body from "./../components/Body";

const Abastecimento = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title={"Abastecimento"}
        goBack={() => navigation.goBack()}
      ></Header>
      <Body></Body>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default Abastecimento;
