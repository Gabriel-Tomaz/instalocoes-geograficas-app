import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Title from "../Title";
import texts from "../../utils/texts";
import { Context } from "../../Context/RoutesContext";

const Menu = ({ navigation }) => {
  const { routeIndex, setRouteIndex } = useContext(Context);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ padding: 20 }}>
        <View style={{ alignSelf: "flex-start" }}>
          <Title title="Menu" />
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              marginBottom: 10,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate("Sumário")}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: "NotoSerif-Bold",
                }}
              >
                Sumário
              </Text>
            </TouchableOpacity>
          </View>
          {texts.map((topic, index) => (
            <View
              key={index}
              style={{
                paddingVertical: 10,
                marginBottom: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setRouteIndex({ index: index, switch: !routeIndex.switch });
                  navigation.navigate("Principal");
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "NotoSerif-Bold",
                  }}
                >
                  {topic.title}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Menu;
