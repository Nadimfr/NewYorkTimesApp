import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "./assets/Fonts/Hook";
import Trending from "./components/Trending";
import { getNews } from "./api/newsApi";

//importing screens
import Article from "./screens/Article";
import ArticleDetailed from "./screens/ArticleDetailed";

//importing and creating stack
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MStack = createNativeStackNavigator();

export const App = () => {
  const [IsReady, setIsReady] = useState(false);
  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {}}
      />
    );
  }
  // <------ RETURNING SCREENS ------>
  else
    return (
      <NavigationContainer>
        <MStack.Navigator>
          <MStack.Screen name="News" component={Article} />
          <MStack.Screen name="Article" component={ArticleDetailed} />
        </MStack.Navigator>
      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // alignItems: "center",
    // justifyContent: "flex-start",
  },
  NYT: {
    alignSelf: "center",
    marginVertical: 50,
    width: Dimensions.get("screen").width * 0.8,
  },

  Title: {
    fontFamily: "Newsreader-Bold",
    fontSize: 30,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
});
export default App;
