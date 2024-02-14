import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const CounterScreen = () => {
  const [colors, setColors] = useState([]);
  const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
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
        onPress={() => setColors([...colors, randomRgb()])}
      />
      {/* <View
        style={{ height: 100, width: 100, backgroundColor: "rgb(0,255,0" }}
      /> */}
      <FlatList
        data={colors}
        renderItem={(item) => <Item co={item} />}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
