// npx expo start

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationIndependentTree } from "@react-navigation/native";

import Main from "../src/navigation/Main";

const App = () => {
  return (
    <NavigationIndependentTree>
      <Main />
    </NavigationIndependentTree>
  );
};

export default App;
