// State
// Schritt 1: useState-Hook importieren
import { useRef, useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NewTodo({ onAddTodo }) {
  const [todo, setTodo] = useState('');
  const input = useRef(null);

  return (
    <>
      <View style={styles.container}>
        <TextInput
          ref={input}
          style={styles.input}
          placeholder="Todo eingeben"
          value={todo}
          onChangeText={(text) => setTodo(text)}
        />
        <Pressable
          onPress={() => {
            onAddTodo(todo);
            input.current.clear();
          }}
        >
          <MaterialIcons name="add-box" size={54} color="orange" />
        </Pressable>
      </View>
    </>
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
