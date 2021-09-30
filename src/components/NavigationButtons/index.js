import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import Colors from "../../styles/colors";

const NavigationButtons = ({ next, previous, disabled }) => {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        backgroundColor: "#FFF",
      }}
    >
      <TouchableOpacity
        onPress={previous}
        style={{
          flex: 1,
          height: 55,
          backgroundColor: "#FFF",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: Colors.primaryColor,
          margin: 5,
        }}
      >
        <Icon
          name="chevron-left"
          type="material"
          size={30}
          color={Colors.primaryColor}
        />
        <Text
          style={{
            fontSize: 24,
            color: Colors.primaryColor,
            fontFamily: "NotoSans-Bold",
          }}
        >
          Voltar
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={next}
        style={{
          flex: 1,
          height: 55,
          backgroundColor: Colors.primaryColor,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: disabled ? "#FFF" : Colors.primaryColor,
          margin: 5,
          opacity: disabled ? 0.6 : 1,
        }}
        disabled={disabled}
      >
        <Text
          style={{
            fontSize: 24,
            color: "#FFF",
            fontFamily: "NotoSans-Bold",
            opacity: 1
          }}
        >
          Continuar
        </Text>
        <Icon name="chevron-right" type="material" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

export default NavigationButtons;
