import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import Calculadora from "./calculadora";

const Home = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "Calculadora_key",
      title: "Calculadora",
      icon: "calculator",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Calculadora_key: Calculadora,
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
