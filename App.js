import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Todo from './components/Todo';

export default function App() {
  return (
    <View style={styles.container}>
      <Todo id={1}>Einkaufen</Todo>
      <Todo id={2}>React Native lernen</Todo>
      <Todo id={3}>Sport</Todo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
