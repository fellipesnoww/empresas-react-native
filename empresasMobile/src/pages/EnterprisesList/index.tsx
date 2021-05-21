import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { AxiosResponse } from 'axios';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import {
  Container,
  TextHeader,
  Header,
  Greeting,
  LogoutButton,
  TextHeaderBold,
  SubtitleContainer,
  Subtitle,
  Content,
  EnterpriseList,
  EnterpriseCard,
  EnterpriseName,
  ImageEnterprise,
  EnterpriseAbout,
  EnterpriseAddress,
  EnterpriseTextInfo,
} from './styles';
import api from '../../services/api';
import { Enterprise } from '../../types/Enterprise';
import { IState } from '../../store';
import { IUserAuthenticated } from '../../store/modules/authentication/types';
import Loader from '../../components/Loader';
import { logout } from '../../store/modules/authentication/actions';
import Button from '../../components/Button';

interface IResponse {
  enterprises: Enterprise[];
}

interface EnterpriseFlatList {
  item: Enterprise;
}

const EnterprisesList: React.FC = () => {
  const reduxState = useSelector<IState, IUserAuthenticated>(
    state => state.authentication,
  );
  const [loading, setLoading] = useState(false);
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const dispatch = useDispatch();

  const route = useRoute<RouteProp<any, any>>();
  const navigation = useNavigation();

  async function loadEnterprises() {
    try {
      setLoading(true);

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

      setEnterprises(response.data.enterprises);
      setLoading(false);
    } catch (error) {
      Alert.alert(
        'Erro ao consultar empresas',
        'Houveram erros ao consultar as empresas',
      );
      setLoading(false);
    }
  }

  function handleLogout() {
    dispatch(logout(true));
  }

  function handleNavigate(id: number) {
    navigation.navigate('EnterpriseDetails', { idEnterprise: id });
  }

  useEffect(() => {
    loadEnterprises();
  }, []);

  return (
    <Container>
      <Header>
        <Greeting>
          <TextHeader>Olá, </TextHeader>
          <TextHeaderBold>{reduxState.investor?.investor_name}</TextHeaderBold>
        </Greeting>
        <LogoutButton onPress={handleLogout}>
          <Icon name="power" size={20} color="#FFF" />
        </LogoutButton>
      </Header>
      <SubtitleContainer>
        <Subtitle>Dê uma olhada nas empresas que temos aqui:</Subtitle>
      </SubtitleContainer>
      <Content>
        {loading && <Loader />}
        <EnterpriseList
          data={enterprises}
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
                  <EnterpriseName>{enterprise.enterprise_name}</EnterpriseName>
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
      </Content>
    </Container>
  );
};

export default EnterprisesList;
