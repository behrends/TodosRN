import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';
import MyTodo from './components/MyTodo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo text="Einkaufen" course="TIF20A" />
      <Todo text="React Native lernen" />
      <Todo text="Sport" />
      <MyTodo todoText="Mittagspause" />
      <MyTodo todoText="Chillen" />
      <MyTodo todoText="keine Ahnung" />
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
