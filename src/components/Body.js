import React from "react";
import { View, StyleSheet } from "react-native";

const Body = ({ children }) => {
  return <View style={style.body}>{children}</View>;
};

const style = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    gap: 10,
    backgroundColor: "lightgray",
  },
});

export default Body;
