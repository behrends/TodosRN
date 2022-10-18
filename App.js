import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    // TODO: handle saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    // TODO: handle error reading value
  }
};

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
    storeData(newTodos);
  }

  async function loadTodos() {
    const myTodos = await getData();
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
