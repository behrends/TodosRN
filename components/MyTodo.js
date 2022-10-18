import { StyleSheet, Text } from 'react-native';

export default function MyTodo(props) {
  return <Text style={styles.invertedText}>{props.todoText}</Text>;
}

const styles = StyleSheet.create({
  invertedText: {
    width: '100%',
    fontSize: 46,
    color: 'white',
    backgroundColor: 'black',
    marginBottom: 5,
  },
});
