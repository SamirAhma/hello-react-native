import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const CounterScreen = ({ title, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button onPress={() => onIncrease()} title={`More ${title}`} />
      <Button title={`Less ${title}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
