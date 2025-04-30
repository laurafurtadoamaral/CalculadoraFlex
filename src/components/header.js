import React from "react";
import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

const Header = ({ title, goBack }) => {
  return (
    <Appbar.Header style={style.header}>
      {goBack && <Appbar.BackAction onPress={goBack} color="white" />}
      <Appbar.Content title={title} titleStyle={style.header_title} />
    </Appbar.Header>
  );
};

const style = StyleSheet.create({
  header: {
    backgroundColor: "purple",
    color: "#fff",
  },

  header_title: {
    fontSize: 24,
    color: "#fff",
  },
});

export default Header;
