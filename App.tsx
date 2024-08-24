import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import Counter from "./src/components/Counter";
import Header from './src/components/Header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.countersWrapper}>
        <Counter
          header={"Daily Water"}
          description={"Counting my water intake per day"}
        />
        <Counter
          header={"Gaming Hours"}
          description={"Counting my gaming hours per week"}
        />
      </View>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  countersWrapper: {
    padding: 16,
    rowGap: 16
  }
});
