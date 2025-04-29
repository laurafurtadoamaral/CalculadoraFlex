import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import Calculadora from "./calculadora";
import Gastos from "./gastos";

const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "Gastos_key",
      title: "Gastos",
      icon: "gas-station",
    },
    {
      key: "Calculadora_key",
      title: "Calculadora",
      icon: "calculator",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Calculadora_key: Calculadora,
    Gastos_key: Gastos,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
