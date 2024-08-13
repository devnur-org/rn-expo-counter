import React, {useState} from 'react';
import {Button, Text, View} from "react-native";
import {styles} from './styles';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount((prevState: number) => prevState + 1);
  }

  function decrement() {
    setCount((prevState: number) => prevState - 1);
  }

  function reset() {
    setCount(0);
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
  )
}

export default Counter;
