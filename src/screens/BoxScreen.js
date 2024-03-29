import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #2</Text>
      <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    flexDirection: "row",
    height: 200,
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
  },
});

export default BoxScreen;
