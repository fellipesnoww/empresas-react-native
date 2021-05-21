import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import { Enterprise } from '../types/Enterprise';

export async function save(enterprise: Enterprise): Promise<void> {
  try {
    const data = await AsyncStorage.getItem('@empresasmobile:enterprises');

    const oldFavorites = data ? (JSON.parse(data) as Enterprise[]) : [];

    const enterpriseAlreadyExist = oldFavorites.find(
      e => e.id === enterprise.id,
    );

    if (enterpriseAlreadyExist !== undefined) {
      throw new Error('Essa empresa já está entre suas favoritas');
    } else {
      oldFavorites.push(enterprise);

      await AsyncStorage.setItem(
        '@empresasmobile:enterprises',
        JSON.stringify(oldFavorites),
      );
      Alert.alert(
        'Favorito adicionado',
        `${enterprise.enterprise_name} adicionado(a) aos favoritos`,
      );
    }
  } catch (error) {
    throw new Error(error);
  }
}

export async function load(): Promise<Enterprise[]> {
  try {
    const data = await AsyncStorage.getItem('@empresasmobile:enterprises');

    const enterprises = data ? (JSON.parse(data) as Enterprise[]) : [];

    return enterprises;
  } catch (error) {
    throw new Error(error);
  }
}

export async function remove(id: number): Promise<void> {
  const data = await AsyncStorage.getItem('@empresasmobile:enterprises');
  const enterprises = data ? (JSON.parse(data) as Enterprise[]) : [];

  const itemToRemove = enterprises.find(e => e.id === id) as Enterprise;

  const index = enterprises.indexOf(itemToRemove);
  if (index > -1) {
    enterprises.splice(index, 1);
  }

  await AsyncStorage.setItem(
    '@empresasmobile:enterprises',
    JSON.stringify(enterprises),
  );
}
