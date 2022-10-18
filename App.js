import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Todos from './components/Todos';

const todos = [
  { id: 0, text: 'Einkaufen' },
  { id: 1, text: 'React Native lernen' },
  { id: 2, text: 'Sport' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Todos todos={todos} />
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
    paddingTop: Constants.statusBarHeight,
  },
});
