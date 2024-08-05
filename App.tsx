import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((prevState: number) => prevState + 1);
  }

  function decrement() {
    setCount((prevState: number) => prevState - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.actionWrapper}>
        <Button title="Decrease" onPress={decrement} />
        <Button title="Increase" onPress={increment} />
      </View>
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
