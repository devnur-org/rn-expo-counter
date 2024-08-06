import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Counter } from "./utils/Counter";

export default function App() {
  const [count, setCount] = useState<number>(Counter.initialValue);

  function increment() {
    setCount(Counter.increment);
  }

  function decrement() {
    setCount(Counter.decrement);
  }

  function reset() {
    setCount(Counter.reset);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.actionWrapper}>
        <Button title="Decrease" onPress={decrement} disabled={count === 0} />
        <Button title="Increase" onPress={increment} />
      </View>
      <Button title="Reset" onPress={reset} disabled={count === 0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 24,
  },
  countText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  actionWrapper: {
    flexDirection: "row",
    columnGap: 12,
  },
});
