import { StyleSheet, Text } from 'react-native';

export default function Todo(props) {
  return <Text style={styles.text}>{props.text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
});
