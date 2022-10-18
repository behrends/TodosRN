// State
// Schritt 1: useState-Hook importieren
import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NewTodo() {
  const [todo, setTodo] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo eingeben"
        value={todo}
        onChangeText={(text) => setTodo(text)}
      />
      <Pressable onPress={() => alert(todo)}>
        <MaterialIcons name="add-box" size={54} color="orange" />
      </Pressable>
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
