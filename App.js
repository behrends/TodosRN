import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';

const todos = [
  { id: 0, text: 'Einkaufen' },
  { id: 1, text: 'React Native lernen' },
  { id: 2, text: 'Sport' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <Todo key={todo.id}>{todo.text}</Todo>
      ))}
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
});
