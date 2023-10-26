// State
// Schritt 1: useState-Hook importieren
import { useRef, useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
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
    alignItems: 'center',
    margin: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    fontSize: 24,
  },
});
