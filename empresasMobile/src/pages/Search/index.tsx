import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { Container, Label, InputText, ContainerInput, TextButton } from './styles';
import Button from '../../components/Button';
import { AxiosResponse } from 'axios';
import { Enterprise, EnterpriseType } from '../../types/Enterprise';
import api from '../../services/api';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import { IUserAuthenticated } from '../../store/modules/authentication/types';
import { useNavigation } from '@react-navigation/native';

interface IResponse{
  enterprises: Enterprise[];
}

interface IPickerData{
  label: string;
  value: string;
}

const Search: React.FC = () => {
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [items, setItems] = useState<IPickerData[]>([]);
  const reduxState = useSelector<IState, IUserAuthenticated>(state => state.authentication);

  const navigation = useNavigation();

  function getUnique(arr: EnterpriseType[], key: string):EnterpriseType[] {

    //1º Map guarda a comparação dos valores do array
    //2º Map e o indexOf guarda todos os indexes dos objetos unicos
    //Elimina os indexes que não são necessários e retorna os objetos que são unicos.
    const unique =  arr.map(e => e[key])
    .map((e, i, final) => final.indexOf(e) === i && i)
    .filter((e) => arr[e]).map(e => arr[e]);

    return unique;
  }

  async function loadEnterprises(){
    try {

      const response: AxiosResponse<IResponse> = await api.get('api/v1/enterprises', {
        headers: {
          "access-token": reduxState.access_token,
          "client": reduxState.client,
          "uid": reduxState.uid
        }
      });

      const types = response.data.enterprises.map(enterprise => enterprise.enterprise_type);
      const uniqueItems = getUnique(types, "id");

      const transformedArray = uniqueItems.map(type => (
        {
          label: type.enterprise_type_name,
          value: type.id.toString()
        }
      ));

      setItems(transformedArray);

    } catch (error) {
      Alert.alert('Erro ao consultar tipos', "Houveram erros ao consultar os tipos das empresas");
    }
  }

  function handleSearch(){
    navigation.navigate("Enterprises", {enterpriseName: name, typeId: selectedValue})
  }

  useEffect(() => {
    loadEnterprises();
  },[]);


  return (
    <Container>
      <Label>Pesquisar {'\n'} empresa</Label>
      <ContainerInput>
        <InputText
          placeholder="Informe o nome da empresa"
          onChangeText={(value: string) => setName(value)}
          keyboardType="email-address"
        />
      </ContainerInput>
      <DropDownPicker
        style={{width: "100%", marginBottom: 20, borderColor: "#000", borderWidth: 2, height: 60}}
        open={open}
        value={selectedValue}
        items={items}
        setOpen={setOpen}
        setValue={setSelectedValue}
        setItems={setItems}
      />
      <Button onPress={() => {handleSearch()}}>
        <TextButton>Buscar</TextButton>
      </Button>
    </Container>
  );
}

export default Search;
