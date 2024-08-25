import {FlatList, ListRenderItem, SafeAreaView, StatusBar, StyleSheet} from "react-native";
import Header from './src/components/Header';
import Counter, {type CounterProps} from "./src/components/Counter";
import counters from './src/data/counters.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <FlatList
        data={counters}
        contentContainerStyle={styles.counterContentContainer}
        renderItem={_renderItem}
      />
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'}/>
    </SafeAreaView>
  );
}

const _renderItem: ListRenderItem<CounterProps> = ({item}) => {
  return <Counter {...item} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  counterContentContainer: {
    padding: 16,
    rowGap: 16
  }
});
