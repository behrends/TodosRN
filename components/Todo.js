import { StyleSheet, Text } from 'react-native';

export default function Todo(props) {
  // Destrukturierung
  const { children, id } = props;
  // …entspricht folgenden Zeilen
  // const children = props.children;
  // const id = props.id;

  const todoText = `${id} — ${children}`;

  return <Text style={styles.text}>{todoText}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
