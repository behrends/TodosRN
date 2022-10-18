import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function Todo(props) {
  return <Text style={styles.text}>{props.text}</Text>;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Todo text="Einkaufen" course="TIF20A" />
      <Todo text="React Native lernen" />
      <Todo text="Sport" />
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
  text: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
