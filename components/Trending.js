import { Dimensions, Platform, StyleSheet, Text } from "react-native";
import { ScrollView, View, TouchableOpacity, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";

const Trending = (props) => {
  //   ("ITEM DATA: ", props);
  const renderLead = (text) => {
    if (text.length > 100) {
      return text.substring(0, 150) + "...";
    } else return text;
  };
  return (
    <View style={styles.Trending}>
      <View style={styles.imageContainer}>
        <Image
          // source={require("../assets/NYT.png")}
          source={
            props.data?.multimedia[1]?.url
              ? {
                  uri: `https://www.nytimes.com/${props?.data.multimedia[1]?.url}`,
                }
              : require("../assets/splash.png")
          }
          style={styles.ArticleImage}
          resizeMode="cover"
          resizeMethod="auto"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.ArticleTitle}>{props?.data?.headline.main}</Text>
        <Text style={styles.Article}>
          {renderLead(props?.data?.lead_paragraph)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Trending: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 5,
    width: Dimensions.get("screen").width * 0.9,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingBottom: 30,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 30,
  },
  ArticleImage: {
    width: "100%",
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  ArticleTitle: {
    fontSize: 24,
    fontFamily: "Newsreader-Bold",
    marginTop: 5,
    textAlign: "center",
    paddingBottom: 10,
  },
  Article: {
    marginTop: 5,
    fontFamily: "Newsreader-Light",
  },
});

export default Trending;
