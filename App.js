import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Storage from './lib/storage';

function SettingsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

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

  function HomeScreen() {
    return (
      <View style={styles.container}>
        <NewTodo onAddTodo={addTodo} />
        <Todos todos={todos} />
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
