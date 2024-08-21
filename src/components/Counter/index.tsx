import React, {useState} from 'react';
import {Text, View} from "react-native";
import {styles} from './styles';
import CounterActionButton from "../CounterActionButton";

interface Props {
  header: string
  description: string
}

const Counter: React.FC<Props> = ({header, description}) => {
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
      <View style={styles.textWrapper}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.counterWrapper}>
        <CounterActionButton onPress={reset} text={"Reset"} disabled={count === 0}/>
        <View style={styles.counterActionWrapper}>
          <CounterActionButton onPress={decrement} iconName={"minus"} disabled={count === 0}/>
          <Text style={styles.countText}>{count}</Text>
          <CounterActionButton onPress={increment} iconName={"plus"}/>
        </View>
      </View>
    </View>
  )
}

export default Counter;
