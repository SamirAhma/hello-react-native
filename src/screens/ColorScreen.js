import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const CounterScreen = () => {
  const [colors, setColors] = useState([]);

  const color = ["black", "red", "yellow", "blue", "grey"];
  function randomColor() {
    colorIndex = Math.floor(Math.random() * color.length);
    return color[colorIndex];
  }
  randomColor();
  const Item = ({ co }) => {
    return (
      <View
        style={{
          backgroundColor: co.item,
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          height: 40,
          width: 40,
        }}
      >
        <Text>fd</Text>
      </View>
    );
  };

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors([...colors, randomColor()])}
      />
      <FlatList
        data={colors}
        renderItem={(item) => <Item co={item} />}
        // keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameStyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "rgb(252, 186, 3)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 40,
    width: 40,
  },
  title: {
    fontSize: 32,
  },
});
export default CounterScreen;
