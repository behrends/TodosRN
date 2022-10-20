import { FlatList, StyleSheet } from 'react-native';
import Todo from './Todo';

export default function Todos(props) {
  return (
    <FlatList
      style={styles.list}
      data={props.todos}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
