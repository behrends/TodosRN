import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';

const todos = ['Einkaufen', 'React Native lernen', 'Sport'];

export default function App() {
  return (
    <View style={styles.container}>
      {todos.map((todo, index) => (
        <Todo key={index}>{todo}</Todo>
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
