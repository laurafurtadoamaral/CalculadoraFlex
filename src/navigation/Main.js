import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./../pages/home";
import Abastecimento from "./../pages/abastecimento";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Abastecimento"
        component={Abastecimento}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default Main;
