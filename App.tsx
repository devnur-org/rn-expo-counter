import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{count}</Text>
      <View style={styles.actionWrapper}>
        <Button title="Decrease" />
        <Button title="Increase" />
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
