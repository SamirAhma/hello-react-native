import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go to List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Image Screen"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Counter Screen"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Color Screen"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Colora Screen"
        onPress={() => navigation.navigate("Colora")}
      />
      <Button
        title="MoreLessColor"
        onPress={() => navigation.navigate("MoreLessColor")}
      />
      <Button
        title="TextScreen"
        onPress={() => navigation.navigate("TextScreen")}
      />
      <Button
        title="BoxScreen"
        onPress={() => navigation.navigate("BoxScreen")}
      />
      <Button
        title="Layout Test"
        onPress={() => navigation.navigate("LayoutTest")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
