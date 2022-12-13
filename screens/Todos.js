import { useEffect, useState } from 'react';
import { useColorScheme, StyleSheet, View } from 'react-native';
import Todos from '../components/Todos';
import NewTodo from '../components/NewTodo';
import Storage from '../lib/storage';

export default function Home() {
  const [todos, setTodos] = useState([]);
  const theme = useColorScheme();

  // Lade Daten aus AsyncStorage
  // beim erstmaligen Start der App
  useEffect(() => {
    loadTodos();
  }, []); // [] bedeutet hier einmalige Ausführung

  function addTodo(todo) {
    const newTodo = { id: todos.length, text: todo, done: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    Storage.storeData(newTodos);
  }

  function toggleTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].done = !todos[index].done;
    setTodos(todos);
    Storage.storeData(todos);
  }

  async function loadTodos() {
    const myTodos = await Storage.getData();
    setTodos(myTodos);
  }

  return (
    <View style={[styles.container, styles[theme]]}>
      <NewTodo onAddTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  light: {
    backgroundColor: '#fff',
  },
  dark: {
    backgroundColor: '#ccc',
  },
});
