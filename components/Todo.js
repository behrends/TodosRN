import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

export default function Todo({ todo, toggleTodo }) {
  const [done, setDone] = useState(todo.done);
  const theme = useColorScheme();

  const doneStyle = done ? styles.todoDone : null;

  function changeTodo() {
    toggleTodo();
    setDone(!done);
  }
  return (
    <Pressable onPress={() => changeTodo(!done)}>
      <Text style={[styles.text, styles[theme], doneStyle]}>
        {todo.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    padding: 10,
  },
  light: {
    color: 'black',
    backgroundColor: 'white',
  },
  dark: {
    color: 'white',
    backgroundColor: '#666',
  },
  todoDone: {
    color: '#CCC',
    textDecorationLine: 'line-through',
  },
});
