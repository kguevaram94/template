import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (
    value: any,
    tipo:
      | 'notas'
  ) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(tipo, jsonValue);
    } catch (error) {
      //Saving error
    }
  };
  
  export const getData = async (
    tipo:
      | 'notas'
  ) => {
    try {
      const jsonValue = await AsyncStorage.getItem(tipo);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };