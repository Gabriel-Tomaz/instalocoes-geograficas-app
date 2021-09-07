import React, { useState, useEffect, useContext } from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Home from "./pages/Home";
import Installations from "./pages/Installations";
import MethodologicalSteps from "./pages/MethodologicalSteps";
import Mounting from "./pages/Mounting";
import Dismount from "./pages/Dismount";
import Results from "./pages/Results";
import Authors from "./pages/Authors";

import Header from "../../components/Header";
import NavigationButtons from "../../components/NavigationButtons";
import { Context } from "../../Context/RoutesContext";

const renderScene = SceneMap({
  Home,
  Installations,
  MethodologicalSteps,
  Mounting,
  Dismount,
  Results,
  Authors,
});

const Principal = ({ navigation }) => {
  const {routeIndex} = useContext(Context);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "Home" },
    { key: "Installations" },
    { key: "MethodologicalSteps" },
    { key: "Mounting" },
    { key: "Dismount" },
    { key: "Results" },
    { key: "Authors" },
  ]);
  const layout = useWindowDimensions();

  const nextTab = () => {
    if (index < routes.length - 1) {
      setIndex(index + 1);
    }
  };
  const previousTab = () => {
    if (index !== 0) {
      setIndex(index - 1);
    }
    if (index === 0) {
      navigation.goBack();
    }
  };

  useEffect(() => {
    setIndex(routeIndex.index);
  }, [routeIndex.switch])
  
  const renderButtons = () => {
    return (
      <NavigationButtons
        next={() => nextTab()}
        previous={() => previousTab()}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        swipeEnabled={false}
        onIndexChange={() => {}}
        initialLayout={{ flex: 1, height: layout.height }}
        renderTabBar={renderButtons}
        tabBarPosition="bottom"
        transitionStyle="curl"
      />
    </View>
  );
};

export default Principal;
