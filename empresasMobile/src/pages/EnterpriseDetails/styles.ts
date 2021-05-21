import styled from 'styled-components/native';
import { ScrollView } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  margin-top: 40px;
`;

export const EnterpriseNameTitle = styled.Text`
  font-size: 28px;
`;

export const ContentScroll = styled(ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const EnterpriseContent = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
`;

export const AddressContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0;
`;

export const VerticalContent = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const EnterpriseImage = styled.Image`
  width: 360px;
  height: 200px;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const About = styled.Text`
  font-size: 18px;
  text-align: justify;
`;

export const Label = styled.Text`
  font-size: 18px;
`;

export const LabelShares = styled.Text`
  font-size: 18px;
  margin: 10px 0;
`;

export const ContactText = styled.Text`
  font-size: 18px;
`;

export const ContactsContainer = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
