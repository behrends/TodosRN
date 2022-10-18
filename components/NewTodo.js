import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function NewTodo() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Todo eingeben" />
      <Pressable onPress={() => alert('OK!')}>
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
