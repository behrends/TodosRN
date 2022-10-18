import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function NewTodo() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Todo eingeben" />
      <Button title="Speichern" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    fontSize: 24,
  },
});
