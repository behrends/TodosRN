import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Storage from './lib/storage';

export default function App() {
  const [todos, setTodos] = useState([]);

  // Lade Daten aus AsyncStorage
  // beim erstmaligen Start der App
  useEffect(() => {
    loadTodos();
  }, []); // <-- einmalige Ausführen

  function addTodo(todo) {
    const newTodo = { id: todos.length, text: todo };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    Storage.storeData(newTodos);
  }

  async function loadTodos() {
    const myTodos = await Storage.getData();
    setTodos(myTodos);
  }

  return (
    <View style={styles.container}>
      <NewTodo onAddTodo={addTodo} />
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
