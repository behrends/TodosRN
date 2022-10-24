import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

export default function Todo({ todo, toggleTodo }) {
  const [done, setDone] = useState(todo.done);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === 'light'
      ? styles.lightThemeText
      : styles.darkThemeText;

  const doneStyle = done ? styles.todoDone : null;

  function changeTodo() {
    toggleTodo();
    setDone(!done);
  }
  return (
    <Pressable onPress={() => changeTodo(!done)}>
      <Text style={[styles.text, themeTextStyle, doneStyle]}>
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
  lightThemeText: {
    color: 'black',
    backgroundColor: 'white',
  },
  darkThemeText: {
    color: 'white',
    backgroundColor: 'black',
  },
  todoDone: {
    color: '#CCC',
    textDecorationLine: 'line-through',
  },
});
