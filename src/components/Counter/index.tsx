import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import CounterActionButton from "../CounterActionButton";

interface CounterProps {
  header: string;
  description: string;
}

const Counter: React.FC<CounterProps> = ({header, description}): React.JSX.Element => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prevState) => prevState + 1);
  }

  function decrement() {
    setCount((prevState) => prevState - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>{header}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.actionButton} onPress={reset}>
          <Text style={styles.actionText}>Reset</Text>
        </TouchableOpacity>
        <View style={styles.actionWrapper}>
          <CounterActionButton icon={"minus"} onPress={decrement}/>
          <Text style={styles.counterText}>{count}</Text>
          <CounterActionButton icon={"plus"} onPress={increment}/>
        </View>
      </View>
    </View>
  );
}

export default Counter;
