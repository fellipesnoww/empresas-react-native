import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import Container from './styles';

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
  <Container activeOpacity={0.7} {...rest}>
    {children}
  </Container>
);
export default Button;
