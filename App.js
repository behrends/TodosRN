import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import Todo from './components/Todo';

const todos = [
  { id: 0, text: 'Einkaufen' },
  { id: 1, text: 'React Native lernen' },
  { id: 2, text: 'Sport' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <Todo key={item.id}>{item.text}</Todo>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    paddingTop: 30,
  },
});
