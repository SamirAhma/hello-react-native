import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View>
      <Text>app 1 </Text>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
      </View>
      <View
        style={{ justifyContent: "center", height: 100, flexDirection: "row" }}
      >
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>

      <Text>app 2 </Text>
      <View style={styles.viewStyle1}>
        <Text style={styles.textOneStyle1}>Child #1</Text>
        <Text style={styles.textTwoStyle1}>Child #2</Text>
      </View>
      <View style={{ height: 100, flexDirection: "row" }}>
        <Text style={styles.textThreeStyle1}>Child #3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    // borderWidth: 1,
    // borderColor: "black",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
  },
  textOneStyle: {
    borderWidth: 1,
    backgroundColor: "red",
  },
  textTwoStyle: {
    borderWidth: 1,
    backgroundColor: "purple",
  },
  textThreeStyle: {
    borderWidth: 1,
    backgroundColor: "green",
    // flex: 1,
  },
  viewStyle1: {
    // borderWidth: 1,
    // borderColor: "black",
    flexDirection: "row",
    height: 100,
    justifyContent: "space-between",
  },
  textOneStyle1: {
    borderWidth: 1,
    backgroundColor: "red",
  },
  textTwoStyle1: {
    borderWidth: 1,
    backgroundColor: "purple",
  },
  textThreeStyle1: {
    borderWidth: 1,
    backgroundColor: "green",
    marginLeft: "auto",
    marginRight: "auto",
    // flex: 1,
  },
});

export default BoxScreen;
