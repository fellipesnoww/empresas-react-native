import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { AxiosResponse } from 'axios';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  Container,
  Label,
  InputText,
  ContainerInput,
  TextButton,
  Content,
  DropdownContent,
} from './styles';
import Button from '../../components/Button';
import { Enterprise, EnterpriseType } from '../../types/Enterprise';
import api from '../../services/api';
import { IState } from '../../store';
import { IUserAuthenticated } from '../../store/modules/authentication/types';
import {
  EnterpriseList,
  EnterpriseCard,
  EnterpriseAbout,
  ImageEnterprise,
  EnterpriseTextInfo,
  EnterpriseName,
  EnterpriseAddress,
} from '../EnterprisesList/styles';
import Loader from '../../components/Loader';

interface IResponse {
  enterprises: Enterprise[];
}

interface IPickerData {
  label: string;
  value: string;
}

interface EnterpriseFlatList {
  // eslint-disable-next-line react/no-unused-prop-types
  item: Enterprise;
}

const Search: React.FC = () => {
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<IPickerData[]>([]);
  const [filteredEnterprises, setFilteredEnterprises] =
    useState<Enterprise[]>();
  const navigation = useNavigation();
  const reduxState = useSelector<IState, IUserAuthenticated>(
    state => state.authentication,
  );

  function getUnique(arr: EnterpriseType[], key: string): EnterpriseType[] {
    // 1º Map guarda a comparação dos valores do array
    // 2º Map e o indexOf guarda todos os indexes dos objetos unicos
    // Elimina os indexes que não são necessários e retorna os objetos que são unicos.
    const unique = arr
      .map(e => e[key])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter(e => arr[e])
      .map(e => arr[e]);

    return unique;
  }

  function handleNavigate(id: number) {
    navigation.navigate('EnterpriseDetails', { idEnterprise: id });
  }

  async function handleSearch() {
    try {
      setLoading(true);
      const response: AxiosResponse<IResponse> = await api.get(
        `/api/v1/enterprises?enterprise_types=${selectedValue}&name=${name}`,
        {
          headers: {
            'access-token': reduxState.access_token,
            client: reduxState.client,
            uid: reduxState.uid,
          },
        },
      );

      if (response.data.enterprises?.length === 0) {
        Alert.alert(
          'Nenhum resultado encontrado',
          'Não encontramos nenhum resultado com os dados encontrados',
        );
      }
      setFilteredEnterprises(response.data.enterprises);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Erro ao consultar tipos',
        'Houveram erros ao consultar os tipos das empresas',
      );
    }
  }

  useEffect(() => {
    async function loadEnterprises() {
      try {
        const response: AxiosResponse<IResponse> = await api.get(
          'api/v1/enterprises',
          {
            headers: {
              'access-token': reduxState.access_token,
              client: reduxState.client,
              uid: reduxState.uid,
            },
          },
        );

        const types = response.data.enterprises.map(
          enterprise => enterprise.enterprise_type,
        );
        const uniqueItems = getUnique(types, 'id');

        const transformedArray = uniqueItems.map(type => ({
          label: type.enterprise_type_name,
          value: type.id.toString(),
        }));

        setItems(transformedArray);
      } catch (error) {
        Alert.alert(
          'Erro ao consultar tipos',
          'Houveram erros ao consultar os tipos das empresas',
        );
      }
    }
    loadEnterprises();
  }, [reduxState.access_token, reduxState.client, reduxState.uid]);

  return (
    <Container>
      <Label>Pesquisar empresa</Label>
      <ContainerInput>
        <InputText
          placeholder="Informe o nome da empresa"
          onChangeText={(value: string) => setName(value)}
          placeholderTextColor="#000"
        />
      </ContainerInput>
      <DropdownContent dropDownOpen={open}>
        <DropDownPicker
          style={{
            width: '100%',
            marginBottom: 20,
            borderColor: '#000',
            borderWidth: 2,
            height: 60,
          }}
          open={open}
          value={selectedValue}
          items={items}
          setOpen={setOpen}
          setValue={() => setSelectedValue}
          setItems={() => setItems}
        />
      </DropdownContent>
      <Button
        onPress={() => {
          handleSearch();
        }}
      >
        <TextButton>Buscar</TextButton>
      </Button>
      <Content>
        {loading ? (
          <Loader />
        ) : (
          <EnterpriseList
            data={filteredEnterprises}
            keyExtractor={(enterprise: Enterprise) => enterprise.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: enterprise }: EnterpriseFlatList) => (
              <EnterpriseCard>
                <EnterpriseAbout>
                  <ImageEnterprise
                    source={{
                      uri: `https://empresas.ioasys.com.br/${enterprise.photo}`,
                    }}
                  />
                  <EnterpriseTextInfo>
                    <EnterpriseName>
                      {enterprise.enterprise_name}
                    </EnterpriseName>
                    <EnterpriseAddress>
                      {enterprise.city} • {enterprise.country}
                    </EnterpriseAddress>
                    <EnterpriseAddress>
                      {enterprise.enterprise_type.enterprise_type_name}
                    </EnterpriseAddress>
                  </EnterpriseTextInfo>
                </EnterpriseAbout>
                <Icon
                  name="chevron-right"
                  size={24}
                  color="#000"
                  onPress={() => handleNavigate(enterprise.id)}
                />
              </EnterpriseCard>
            )}
          />
        )}
      </Content>
    </Container>
  );
};

export default Search;
