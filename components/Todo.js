import { StyleSheet, Text, useColorScheme } from 'react-native';

export default function Todo({ children }) {
  const colorScheme = useColorScheme();
  const themeTextStyle =
    colorScheme === 'light'
      ? styles.lightThemeText
      : styles.darkThemeText;

  return (
    <Text style={[styles.text, themeTextStyle]}>{children}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  lightThemeText: {
    color: 'black',
    backgroundColor: 'white',
  },
  darkThemeText: {
    color: 'white',
    backgroundColor: 'black',
  },
});
