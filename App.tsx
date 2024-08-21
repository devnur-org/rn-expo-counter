import {FlatList, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import counters from './src/data/counters.json';
import Counter from "./src/components/Counter";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <View style={styles.container}>
        <FlatList
          data={counters}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.counterListContent}
          renderItem={({item}) =>
            <Counter header={item.header} description={item.description}/>
          }
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
  counterListContent: {
    rowGap: 8,
    padding: 12
  }
});
