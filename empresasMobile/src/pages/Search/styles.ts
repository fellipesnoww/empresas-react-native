import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 45px;
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
  margin: 25px 0;
  border: #000 solid 2px;
`;

export const TextButton = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;
