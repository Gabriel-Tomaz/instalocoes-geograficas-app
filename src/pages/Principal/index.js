import React, { useState, useEffect, useContext, useRef } from "react";
import { View, useWindowDimensions, Animated } from "react-native";
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
  const { routeIndex } = useContext(Context);
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
  }, [routeIndex.switch]);

  const renderButtons = () => {
    return (
      <NavigationButtons
        next={() => nextTab()}
        previous={() => previousTab()}
        disabled={index >= routes.length -1}
      />
    );
  };

  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View style={{ ...props.style, opacity: fadeAnim, flex: 1 }}>
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header />
      <FadeInView style={{flex: 1}}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          swipeEnabled={false}
          onIndexChange={() => {}}
          initialLayout={{ flex: 1, height: layout.height }}
          renderTabBar={() => {}}
          tabBarPosition="bottom"
          transitionStyle="curl"
        />
      </FadeInView>
      {renderButtons()}
    </View>
  );
};

export default Principal;
