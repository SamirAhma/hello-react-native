import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorChanger from "../components/ColorChanger";

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
  // state === {red:num,green:num,blue:num}
  //action === {colorToChange:'red', amount:15}

  switch (action.type) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0) {
        return { ...state };
      } else {
        return { ...state, red: state.red + action.payload };
      }

    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      ) {
        return { ...state };
      } else {
        return { ...state, green: state.green + action.payload };
      }

    case "change_blue":
      if (
        state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
      ) {
        return { ...state };
      } else {
        return { ...state, blue: state.blue + action.payload };
      }

    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  console.log(state);
  return (
    <View>
      {/* <FlatList
        data={colors}
        renderItem={(item) => <Item co={item} />}
        // keyExtractor={(item) => item.id}
      /> */}
      {/* <Text>Red</Text>
      <Button onPress={() => setRed(red + 2)} title="More Red" />
      <Button title="Less Red" onPress={() => setRed(red - 2)} /> */}
      <ColorChanger
        title="red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorChanger
        title="blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorChanger
        title="green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      {/* <ColorChanger title="blue" color={blue} onIncrease={()=>} onDecrease={()=>} />
      <ColorChanger title="green" color={green} onIncrease={()=>} onDecrease={()=>} />  */}
      <View
        style={{
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
          padding: 20,
          marginVertical: 8,
          marginHorizontal: 16,
          height: 40,
          width: 40,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default CounterScreen;
