import * as Font from "expo-font";
import React from "react";

export default useFonts = async () =>
  await Font.loadAsync({
    "Newsreader-Bold": require("./Newsreader-Bold.ttf"),
    "Newsreader-Italic": require("./Newsreader-Italic.ttf"),
    "Newsreader-Medium": require("./Newsreader-Medium.ttf"),
    "Newsreader-Regular": require("./Newsreader-Regular.ttf"),
    "Newsreader-Light": require("./Newsreader-Light.ttf"),
  });
