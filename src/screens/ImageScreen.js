import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../components/ImageDetails.js";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={9}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={7}
      />
      <ImageDetail
        title="mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={8}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
