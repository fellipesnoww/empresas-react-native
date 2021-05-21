import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Enterprise } from '../../types/Enterprise';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TextHeader = styled.Text`
  font-size: 32px;
`;

export const TextHeaderBold = styled.Text`
  font-size: 32px;
  font-weight: bold;
`;

export const Header = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  margin-top: 40px;
`;

export const Greeting = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: #c43f3f;
  border-radius: 8px;
`;

export const SubtitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

export const Subtitle = styled.Text`
  font-size: 18px;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex: 1;
`;

export const NotFoundMessage = styled.Text`
  font-size: 30px;
  text-align: center;
  margin-bottom: 15px;
`;

export const EnterpriseList = styled(
  FlatList as new () => FlatList<Enterprise>,
).attrs({
  numColumns: 1,
})`
  padding: 0 10px;
`;

export const EnterpriseCard = styled.View`
  width: 350px;
  height: 75px;
  align-items: center;
  justify-content: space-between;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 8px;
  border: solid #000 1px;
  flex-direction: row;
`;

export const EnterpriseTextInfo = styled.View`
  justify-content: flex-start;
  margin-left: 8px;
`;

export const EnterpriseName = styled.Text`
  font-size: 18px;
`;

export const EnterpriseAddress = styled.Text`
  font-size: 14px;
`;

export const EnterpriseAbout = styled.View`
  flex-direction: row;
`;

export const ImageEnterprise = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const ButtonContent = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;
