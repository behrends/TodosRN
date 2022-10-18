import { FlatList } from 'react-native';
import Todo from './Todo';

export default function Todos(props) {
  return (
    <FlatList
      data={props.todos}
      renderItem={({ item }) => (
        <Todo key={item.id}>{item.text}</Todo>
      )}
    />
  );
}
