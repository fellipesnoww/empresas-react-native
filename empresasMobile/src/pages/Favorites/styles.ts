import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import { Enterprise } from '../../types/Enterprise';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin-top: 40px;
`;

export const EnterpriseNameTitle = styled.Text`
  font-size: 28px;
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
  width: 340px;
  height: 75px;
  align-items: center;
  justify-content: flex-start;
  margin: 5px 0;
  padding: 0 10px;
  border-radius: 8px;
  border: solid #000 1px;
  flex-direction: row;
  background-color: #fff;
`;

export const EnterpriseTextInfo = styled.View`
  justify-content: flex-start;
  margin-left: 8px;
`;

export const EnterpriseName = styled.Text`
  font-size: 18px;
`;

export const EnterpriseAddress = styled.Text`
  font-size: 16px;
`;

export const EnterpriseAbout = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ImageEnterprise = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const RemoveButton = styled(RectButton).attrs({})`
  width: 90px;
  height: 72px;
  background-color: red;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
  right: 12px;
`;
