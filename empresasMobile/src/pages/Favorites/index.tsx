import React, { useState, useEffect } from 'react';
import { View, Animated, Alert } from 'react-native';

import { Container, Header, SubtitleContainer, Subtitle, Content, NotFoundMessage, EnterpriseList, EnterpriseCard, EnterpriseName, ImageEnterprise, EnterpriseAbout, EnterpriseAddress, EnterpriseTextInfo, EnterpriseNameTitle, RemoveButton } from './styles';
import  Icon  from 'react-native-vector-icons/Feather';
import { Enterprise } from '../../types/Enterprise';
import Loader from '../../components/Loader';
import { load, remove } from '../../libs/storeEnterprises';
import { Swipeable, RectButton } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';

interface FavoriteFlatList{
  item: Enterprise;
}

const Favorites: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState<Enterprise[]>([]);
  const isFocused = useIsFocused();

  async function handleRemove(id: number){
    try {
      await remove(id);
      await getFavoritesEnterprise();
    } catch (error) {
      Alert.alert("Erro ao remover favorito", "Houveram erros ao remover este favorito");
    }
  }

  async function getFavoritesEnterprise(){
    const storagedData = await load();
    setFavorites(storagedData);
    setLoading(false);
  }

  useEffect(() => {

    getFavoritesEnterprise();
  }, [isFocused]);

  return (
    <Container>
      <Header>
        <EnterpriseNameTitle>Favoritos</EnterpriseNameTitle>
      </Header>
        <Content>
          {loading && (
            <Loader />
          )}
          {(favorites.length === 0 && !loading) ? (
            <>
              <NotFoundMessage>Voce ainda não possui favoritos 😢</NotFoundMessage>
            </>
          )
          :
          (
            <EnterpriseList
                data={favorites}
                keyExtractor={(enterprise: Enterprise) => enterprise.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: enterprise }: FavoriteFlatList) => (
                  <Swipeable
                    overshootRight={false}
                    renderRightActions={() => (
                        <Animated.View>
                            <View>
                            <RemoveButton onPress={() => {handleRemove(enterprise.id)}}>
                              <Icon name="trash" size={32} color="#FFF"/>
                            </RemoveButton>
                            </View>
                        </Animated.View>
                    )}
                >
                  <EnterpriseCard>
                    <EnterpriseAbout>
                      <ImageEnterprise source={{uri: `https://empresas.ioasys.com.br/${enterprise.photo}`}}/>
                    </EnterpriseAbout>
                    <EnterpriseTextInfo>
                      <EnterpriseName>{enterprise?.enterprise_name}</EnterpriseName>
                      <EnterpriseAddress>{enterprise?.city} • {enterprise?.country}</EnterpriseAddress>
                    </EnterpriseTextInfo>
                  </EnterpriseCard>
                </Swipeable>

                )}
              />
          )}
        </Content>
    </Container>

  );
}

export default Favorites;
