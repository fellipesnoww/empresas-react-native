import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

interface CustomProps extends ViewProps {
  dropDownOpen: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;

  margin-top: 45px;
`;

export const Label = styled.Text`
  font-size: 24px;
`;

export const InputText = styled.TextInput`
  font-size: 18px;
`;

export const ContainerInput = styled.View`
  width: 300px;
  height: 60px;
  flex-direction: row;
  padding: 0 15px;
  border-radius: 8px;
  align-items: center;
  margin: 10px 0;
  border: #000 solid 2px;
`;

export const TextButton = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  margin-top: 40px;
`;

export const DropdownContent = styled.View<CustomProps>`
  align-items: center;
  justify-content: center;
  padding: 0 45px;
  margin-bottom: ${(props: CustomProps) =>
    props.dropDownOpen ? '200px' : '10px'};
`;
