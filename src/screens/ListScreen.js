import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
const ListScreen = () => {
  const freinds = [
    { name: "Freind #1", age: 45 },
    { name: "Freind #2", age: 45 },
    { name: "Freind #3", age: 45 },
    { name: "Freind #4", age: 45 },
    { name: "Freind #5", age: 45 },
    { name: "Freind #6", age: 45 },
    { name: "Freind #7", age: 45 },
    { name: "Freind #8", age: 45 },
    { name: "Freind #9", age: 45 },
    { name: "Freind #11", age: 45 },
    { name: "Freind #12", age: 45 },
    { name: "Freind #13", age: 45 },
  ];
  return (
    <FlatList
      showHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={freinds}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}-{item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
