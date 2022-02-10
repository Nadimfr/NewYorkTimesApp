import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";

//importing re-usable component
import Trending from "../components/Trending";

//importing Api
import { getNews } from "../api/newsApi";
import SearchbarN from "../components/Searchbar";
const Home = ({ navigation }) => {
  const [data, setData] = useState();
  useEffect(() => {
    const runEffect = async () => {
      getNews(1).then((res) => {
        setData(res);
      });
    };
    runEffect();
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Image
        source={require("../assets/NYT.png")}
        style={styles.NYT}
        height={100}
        resizeMode="contain"
      />

      <SearchbarN placeholder="Search for article..." />

      <Text style={styles.Title}>Trending News</Text>

      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {data?.slice(0, 2).map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Article", { data: item })}
          >
            <Trending data={item} key={index} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <Text style={styles.Title}>News</Text>

      <View style={{ marginBottom: 50 }}>
        {data?.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Article", { data: item })}
          >
            <Trending data={item} key={index} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontFamily: "Newsreader-Bold",
    fontSize: 30,
    marginLeft: 20,
    marginTop: 20,
  },
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
  NYT: {
    width: Dimensions.get("screen").width * 0.8,
    alignSelf: "center",
    marginBottom: Platform.OS === "ios" ? 20 : -50,
    marginTop: Platform.OS === "ios" ? 0 : -70,
  },
});

export default Home;
