import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
  static async storeData(value) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('todos', jsonValue);
    } catch (e) {
      // TODO: handle saving error
    }
  }

  static async getData() {
    try {
      const jsonValue = await AsyncStorage.getItem('todos');
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      // TODO: handle error reading value
    }
  }
}
