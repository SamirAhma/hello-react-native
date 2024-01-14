import React from "react";
import { Text, StyleSheet } from "react-native";
var name = "Ahmaddin";
const ComponentsScreen = () => {
  return (
    <>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameStyle}>My name is {name} </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
