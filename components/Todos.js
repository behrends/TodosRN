import { FlatList, StyleSheet, View } from 'react-native';
import Todo from './Todo';

export default function Todos(props) {
  return (
    <FlatList
      style={styles.list}
      data={props.todos}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
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
