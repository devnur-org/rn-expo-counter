import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import CounterActionButton from "../CounterActionButton";

export interface CounterProps {
  header: string;
  description: string;
  max: number | null;
  initial: number;
  steps: number;
}


const Counter: React.FC<CounterProps> = ({header, description, max, initial, steps}): React.JSX.Element => {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount((prevState) => prevState + steps);
  }

  function decrement() {
    setCount((prevState) => prevState - steps);
  }

  function reset() {
    setCount(initial);
  }

  const isMax = max !== null ? count === max : false

  return (
    <View style={styles.cardContainer}>
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>{header}</Text>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.actionButton} onPress={reset} disabled={count === initial}>
          <Text style={styles.actionText}>Reset</Text>
        </TouchableOpacity>
        <View style={styles.actionWrapper}>
          <CounterActionButton icon={"minus"} onPress={decrement} disabled={count === initial}/>
          <Text style={styles.counterText}>{count}</Text>
          <CounterActionButton icon={"plus"} onPress={increment} disabled={isMax}/>
        </View>
      </View>
    </View>
  );
}

export default Counter;
