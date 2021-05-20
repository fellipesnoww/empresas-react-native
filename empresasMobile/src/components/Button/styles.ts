import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 150px;
  height: 60px;
  background: ${props => props.disabled ? "#666360" : "#03fc30"};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

