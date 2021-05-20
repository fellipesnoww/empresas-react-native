import AsyncStorage from '@react-native-async-storage/async-storage';
import { Enterprise } from '../types/Enterprise';

export async function save(enterprise: Enterprise): Promise<void>{
    try {

        const data = await AsyncStorage.getItem('@empresasmobile:enterprises');

        const oldFavorites = data ? (JSON.parse(data) as Enterprise[]) : [];

        const enterpriseAlreadyExist = oldFavorites.find(e => e.id === enterprise.id);

        console.log('AAAAA', enterpriseAlreadyExist);

        if(enterpriseAlreadyExist !== undefined){
          console.log('AAAAAaasaehausheas');
          throw new Error("Essa empresa já está entre suas favoritas");
        }else{
            oldFavorites.push(enterprise);

            console.log(oldFavorites);
            await AsyncStorage.setItem('@empresasmobile:enterprises', JSON.stringify(oldFavorites));
        }
    } catch (error) {
        throw new Error(error);
    }
}

export async function load(): Promise<Enterprise[]>{
    try {
        const data = await AsyncStorage.getItem('@empresasmobile:enterprises');

        const enterprises = data ? (JSON.parse(data) as Enterprise[]) : [];

        return enterprises;

    } catch (error) {
        throw new Error(error);
    }
}

export async function remove(id: number): Promise<void>{
    const data = await AsyncStorage.getItem('@empresasmobile:enterprises');
    const enterprises = data ? (JSON.parse(data) as Enterprise[]) : [];

    const itemToRemove = enterprises.find(e => e.id === id) as Enterprise;

    const index = enterprises.indexOf(itemToRemove);
    if (index > -1) {
      enterprises.splice(index, 1);
    }

    await AsyncStorage.setItem('@empresasmobile:enterprises', JSON.stringify(enterprises));
}
