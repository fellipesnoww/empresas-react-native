import { Platform, TextInputProps } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

interface InputCustomProps extends TextInputProps{
  focused: boolean;
  filled: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.Image`
  width: 320px;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin: 10px 0;
`;

export const ContainerInput = styled.View<InputCustomProps>`
  width: 300px;
  height: 60px;
  flex-direction: row;
  padding: 0 15px;
  border-radius: 8px;
  align-items: center;
  border: ${props => props.focused || props.filled ? '#03fc30' : '#666360'} solid 2px;
  margin: 10px 0;
`;

export const InputText = styled.TextInput`
  font-size: 18px;
  width: 80%;
`;

export const ForgotPasswordContainer = styled.View`
  width: 300px;
  margin: 10px 0 15px 0;
  align-items: flex-end;
`;

export const Label = styled.Text`
  font-size: 18px;
`;

export const CreateAccountContainer = styled.View`
  align-items: center;
  margin-bottom: ${Platform.OS === "ios" ? getBottomSpace() + "px": "40px"};
`;

export const TextButton = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;
