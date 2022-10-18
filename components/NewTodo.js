import { StyleSheet, TextInput } from 'react-native';

export default function NewTodo() {
  return (
    <TextInput style={styles.input} placeholder="Todo eingeben" />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    fontSize: 24,
  },
});
