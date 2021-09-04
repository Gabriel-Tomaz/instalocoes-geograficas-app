import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  Linking,
} from "react-native";

import Colors from "../../styles/colors";

import Title from "../Title";
import ModalComponent from "../ModalComponent";
import texts from "../../utils/texts";

const Texts = ({ index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentID, setCurrentID] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, flexGrow: 1, padding: 20 }}
          contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
        >
          <View style={{ alignSelf: "flex-start", marginBottom: 20 }}>
            <Title title={texts[index].title} />
          </View>
          {texts[index].text ? (
            <Text
              style={{
                fontFamily: "NotoSerif-Regular",
                fontSize: 18,
                textAlign: "left",
                marginBottom: 20,
              }}
            >
              {texts[index].text}
            </Text>
          ) : null}

          {texts[index].topics
            ? texts[index].topics.map((topic, topicIndex) => (
                <View key={topicIndex} style={{ marginBottom: 20 }}>
                  <Text
                    style={{
                      fontFamily: "NotoSans-Bold",
                      fontSize: 18,
                    }}
                  >
                    {topic.subTitle}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NotoSerif-Regular",
                      fontSize: 18,
                      textAlign: "left",
                      marginTop: 15,
                    }}
                  >
                    {topic.topicText}
                  </Text>
                </View>
              ))
            : null}

          {texts[index].objects
            ? texts[index].objects.map((object, objIndex) => (
                <TouchableOpacity
                  style={{
                    backgroundColor: Colors.grayColor,
                    padding: 16,
                    marginBottom: 25,
                    borderColor: "#ddd",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    elevation: 2,
                    borderBottomWidth: 0,
                  }}
                  onPress={() => {
                    setCurrentID(object.id - 1);
                    setIsVisible(true);
                  }}
                  key={objIndex}
                >
                  <View style={{ marginBottom: 15 }}>
                    <Image
                      source={object.imgGray}
                      style={{ maxWidth: "100%", height: 156 }}
                    />
                  </View>
                  <Text
                    style={{
                      fontFamily: "NotoSans-Bold",
                      fontSize: 16,
                    }}
                  >
                    {object.title}
                  </Text>
                </TouchableOpacity>
              ))
            : null}

          {texts[index].authors
            ? texts[index].authors.map((author) => (
                <View key={author.id} style={{ marginBottom: 20 }}>
                  <Text style={{ fontFamily: "NotoSerif-Bold", fontSize: 18 }}>
                    {author.name}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "NotoSerif-Regular",
                      fontSize: 18,
                    }}
                  >
                    {author.abstract}
                  </Text>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`${author.link}`)}
                    style={{ marginTop: 15 }}
                  >
                    <Text
                      style={{
                        fontFamily: "NotoSerif-Regular",
                        fontSize: 18,
                        textDecorationLine: "underline",
                        color: Colors.secondaryColor,
                      }}
                    >
                      {author.link}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            : null}
        </ScrollView>
      </View>

      <ModalComponent
        visible={isVisible}
        hideModal={() => setIsVisible(false)}
        id={currentID}
      />
    </View>
  );
};

export default Texts;
