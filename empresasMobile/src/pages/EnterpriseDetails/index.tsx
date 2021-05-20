import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { Container, Header, EnterpriseNameTitle, ContentScroll, EnterpriseImage, About, EnterpriseContent, ContactsContainer, AddressContent, Label, LabelShares, VerticalContent, ContactText } from './styles';
import Icon from 'react-native-vector-icons/Feather';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { AxiosResponse } from 'axios';
import api from '../../services/api';
import { IState } from '../../store';
import { IUserAuthenticated } from '../../store/modules/authentication/types';
import { Enterprise } from '../../types/Enterprise';
import Loader from '../../components/Loader';
import { save } from '../../libs/storeEnterprises';

interface CustomParams{
  idEnterprise: number;
}

interface IResponse{
  enterprise: Enterprise;
}

const EnterpriseDetails: React.FC = () => {
  const route = useRoute<RouteProp<any, any>>();
  const navigation = useNavigation();
  const reduxState = useSelector<IState, IUserAuthenticated>(state => state.authentication);
  const [enterprise, setEnterprise] = useState<Enterprise>();
  const [loading, setLoading] = useState(false);

  function handleGoBack(){
    navigation.goBack();
  }

  async function getEnterpriseData(id: number){
    try {
      setLoading(true);
      const response:AxiosResponse<IResponse> = await api.get(`api/v1/enterprises/${id}`, {
        headers: {
          "access-token": reduxState.access_token,
          "client": reduxState.client,
          "uid": reduxState.uid
        }
      });

      setEnterprise(response.data.enterprise);
      setLoading(false);

    } catch (error) {
      console.log(error);
      Alert.alert("Houveram erros ao consultar empresa", "Ops, houveram erros ao consultar essa empresa");
      handleGoBack();
    }
  }

  useEffect(() => {
    const params = route.params as CustomParams;
    getEnterpriseData(params.idEnterprise);
  },[]);

  function handleClickContact(value: string | undefined): void{
    if(!value){
      Alert.alert('Ops', 'Essa empresa optou por não exibir seu contato.');
    } else {
      Alert.alert('Contato', value);
    }

  }

  async function handleAddFavorite(enterprise: Enterprise | undefined): Promise<void>{
    try {
      await save(enterprise as Enterprise);
    } catch (error) {
      Alert.alert('Erro ao adicionar favorito', 'Voce já adicionou essa empresa aos favoritos');
    }
  }
  return (
    <Container>
      {loading ? (
        <Loader />
      ):
      (
      <>
      <Header>
        <Icon name="chevron-left" size={25} color="#03fc30" onPress={handleGoBack}/>
        <EnterpriseNameTitle>{enterprise?.enterprise_name}</EnterpriseNameTitle>
        <Icon name="heart" size={25} color="#03fc30" onPress={() => {handleAddFavorite(enterprise)}}/>
      </Header>
      <ContentScroll>
        <EnterpriseContent>
          <EnterpriseImage source={{uri:`https://empresas.ioasys.com.br${enterprise?.photo}`}}/>
          <About>{enterprise?.description}</About>
          <AddressContent>
            <Label>Cidade: </Label>
            <Label>{enterprise?.city} • {enterprise?.country}</Label>
          </AddressContent>
          <VerticalContent>
            <LabelShares>Tipo: {enterprise?.enterprise_type.enterprise_type_name}</LabelShares>
            <LabelShares>Ações: {enterprise?.shares}</LabelShares>
            <LabelShares>Preço das Ações: {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(enterprise?.share_price as number)}</LabelShares>
          </VerticalContent>
          <ContactText>Contatos:</ContactText>
          <ContactsContainer>
            <Icon name="facebook" size={40} color="#03fc30" onPress={() => {handleClickContact(enterprise?.facebook)}}/>
            <Icon name="twitter" size={40} color="#03fc30" onPress={() => {handleClickContact(enterprise?.twitter)}}/>
            <Icon name="mail" size={40} color="#03fc30" onPress={() => {handleClickContact(enterprise?.email_enterprise)}}/>
            <Icon name="linkedin" size={40} color="#03fc30" onPress={() => {handleClickContact(enterprise?.linkedin)}}/>
            <Icon name="phone" size={40} color="#03fc30" onPress={() => {handleClickContact(enterprise?.phone)}}/>
          </ContactsContainer>
        </EnterpriseContent>
      </ContentScroll>
      </>
      )}

    </Container>
  );
}

export default EnterpriseDetails;
