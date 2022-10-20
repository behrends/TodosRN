import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

export default function Todo({ children }) {
  const [done, toggleDone] = useState(false);

  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === 'light'
      ? styles.lightThemeText
      : styles.darkThemeText;

  const doneStyle = done ? styles.todoDone : null;

  return (
    <Pressable onPress={() => toggleDone(!done)}>
      <Text style={[styles.text, themeTextStyle, doneStyle]}>
        {children}
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
    textDecorationLine: 'line-through',
  },
});
