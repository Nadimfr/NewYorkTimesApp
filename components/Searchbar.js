import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Searchbar } from "react-native-paper";

const SearchbarN = (props) => {
  return (
    <Searchbar
      style={{
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 30,
        height: 40,
        margin: 10,
      }}
      {...props}
      selectionColor="black"
      activeOutlineColor="black"
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgray",
  },
});

export default SearchbarN;
