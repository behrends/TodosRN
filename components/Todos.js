import { FlatList, StyleSheet, View } from 'react-native';
import Todo from './Todo';

export default function Todos({ todos, toggleTodo }) {
  return (
    <FlatList
      style={styles.list}
      data={todos}
      renderItem={({ item }) => (
        <Todo
          key={item.id}
          toggleTodo={() => toggleTodo(item.id)}
          todo={item}
        />
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: StyleSheet.hairlineWidth,
            backgroundColor: '#CCC',
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
  },
});
