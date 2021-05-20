import React, { useState, useEffect } from 'react';
import { Alert, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Container, TextHeader, Header, Greeting, LogoutButton, TextHeaderBold, SubtitleContainer, Subtitle, Content, NotFoundMessage, EnterpriseList, EnterpriseCard, EnterpriseName, ImageEnterprise, EnterpriseAbout, EnterpriseAddress, EnterpriseTextInfo } from './styles';
import api from '../../services/api';
import { AxiosResponse } from 'axios';
import { Enterprise } from '../../types/Enterprise';
import { IState } from '../../store';
import { IUserAuthenticated } from '../../store/modules/authentication/types';
import Icon from 'react-native-vector-icons/Feather';
import Loader from '../../components/Loader';
import { logout } from '../../store/modules/authentication/actions';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';

interface CustomParams{
  enterpriseName: string;
  typeId: number;
}

interface IResponse{
  enterprises: Enterprise[];
}

interface EnterpriseFlatList{
  item: Enterprise;
}

const EnterprisesList: React.FC = () => {
  const reduxState = useSelector<IState, IUserAuthenticated>(state => state.authentication);
  const [loading, setLoading] = useState(false);
  const [enterprises, setEnterprises] = useState<Enterprise[]>([]);
  const dispatch = useDispatch();
  const [enterpriseName, setEnterpriseName] = useState("");
  const [enterpriseType, setEnterpriseType] = useState(0);

  const route = useRoute<RouteProp<any, any>>();
  const navigation = useNavigation();

  async function loadEnterprises(name = "", typeId = 0){
    try {
      var url = 'api/v1/enterprises';

      if(name && typeId !== 0){
        console.log('aq')
        url = `/api/v1/enterprises?enterprise_types=${typeId}&name=${name}`
      }

      const response: AxiosResponse<IResponse> = await api.get(url, {
        headers: {
          "access-token": reduxState.access_token,
          "client": reduxState.client,
          "uid": reduxState.uid
        }
      });

      setEnterprises(response.data.enterprises);
      setLoading(false);
    } catch (error) {
      Alert.alert('Erro ao consultar empresas', "Houveram erros ao consultar as empresas");
      setLoading(false);
    }
  }

  function handleLogout(){
    dispatch(logout(true));
  }

  function handleNavigate(id: number){
    navigation.navigate("EnterpriseDetails", {idEnterprise: id});
  }

  useEffect(() => {
    const routeParams = route.params as CustomParams;
    setEnterpriseName(routeParams?.enterpriseName);
    setEnterpriseType(routeParams?.typeId);
    setLoading(true);
    loadEnterprises(enterpriseName, enterpriseType);
  }, []);

  return (
    <Container>
        <Header>
          <Greeting>
            <TextHeader>Olá, </TextHeader>
            <TextHeaderBold>{reduxState.investor?.investor_name}</TextHeaderBold>
          </Greeting>
            <LogoutButton
              onPress={handleLogout}
            >
              <Icon name="power" size={20} color="#FFF"/>
            </LogoutButton>
        </Header>

        <SubtitleContainer>
          <Subtitle>Dê uma olhada nas empresas que temos aqui:</Subtitle>
        </SubtitleContainer>
        <Content>
          {loading && (
            <Loader />
          )}
          {(enterprises.length === 0 && !loading) ? (
            <>
              <NotFoundMessage>Não encotramos nenhuma empresa 😢</NotFoundMessage>
            </>
          )
          :
          (
            <EnterpriseList
                data={enterprises}
                keyExtractor={(enterprise: Enterprise) => enterprise.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: enterprise }: EnterpriseFlatList) => (
                  <EnterpriseCard>
                    <EnterpriseAbout>
                      <ImageEnterprise source={{uri: `https://empresas.ioasys.com.br/${enterprise.photo}`}}/>
                      <EnterpriseTextInfo>
                        <EnterpriseName>{enterprise.enterprise_name}</EnterpriseName>
                        <EnterpriseAddress>{enterprise.city} • {enterprise.country}</EnterpriseAddress>
                        <EnterpriseAddress>{enterprise.enterprise_type.enterprise_type_name}</EnterpriseAddress>
                      </EnterpriseTextInfo>
                    </EnterpriseAbout>
                    <Icon name="chevron-right" size={24} color="#000" onPress={() => handleNavigate(enterprise.id)}/>
                  </EnterpriseCard>
                )}
              />
          )}
        </Content>
    </Container>

  );
}

export default EnterprisesList;
