import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

const todos = [
  { id: 0, text: 'Einkaufen' },
  { id: 1, text: 'React Native lernen' },
  { id: 2, text: 'Sport' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <NewTodo />
      <Todos todos={todos} />
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
    paddingTop: Constants.statusBarHeight,
  },
});
