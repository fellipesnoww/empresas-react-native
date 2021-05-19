import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container, Label} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({title, ...rest}: ButtonProps) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Label>{title}</Label>
    </Container>
  );
}
export default Button;