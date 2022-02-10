import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";

const ArticleDetailed = ({ route }) => {
  const [data, setData] = useState();
  useEffect(() => {
    console.log(route.params.data);
    setData(route.params.data);
  }, []);
  const openUrl = async (url) => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <Image
        source={
          data?.multimedia[1]?.url
            ? {
                uri: `https://www.nytimes.com/${data.multimedia[1]?.url}`,
              }
            : require("../assets/splash.png")
        }
        style={styles.ArticleImage}
        resizeMode="cover"
        resizeMethod="auto"
      />
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          paddingHorizontal: 20,
        }}
      >
        <Text style={styles.ArticleTitle}>{data?.headline.main}</Text>
        <Text style={styles.Article}>{data?.lead_paragraph}</Text>

        <Text onPress={() => openUrl(data?.web_url)} style={styles.Link}>
          {data?.web_url}
        </Text>
        <Text style={styles.Date}>{data?.pub_date}</Text>
      </View>
    </ScrollView>
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
  Link: {
    color: "blue",
    textDecorationLine: "underline",
  },
  Date: {
    fontFamily: "Newsreader-Bold",
    alignSelf: "flex-end",
    color: "grey",
    marginRight: 20,
    marginTop: 100,
  },
  imageContainer: {
    width: "100%",
    height: 200,
    marginBottom: 30,
  },
  ArticleImage: {
    width: "100%",
    height: 300,
    shadowColor: "#171717",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginTop: 5,
  },
  ArticleTitle: {
    fontSize: 28,
    fontFamily: "Newsreader-Bold",
    marginTop: 25,
    textAlign: "center",
    paddingBottom: 10,
    textDecorationLine: "underline",
  },
  Article: {
    marginTop: 5,
    fontSize: 18,
    fontFamily: "Newsreader-Light",
  },
});

export default ArticleDetailed;
