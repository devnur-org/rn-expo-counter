import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import Counter from "./src/components/Counter";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.wrapper}>
        <Counter
          header={"Daily Water"}
          description={"I am going to measure my everyday daily water using this counter."}
        />
        <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    padding: 12
  },
  counterListContent: {
    rowGap: 8,
    padding: 12
  }
});
