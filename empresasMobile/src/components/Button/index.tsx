import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import {Container} from './styles';



export function Button({children, ...rest}) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {children}
    </Container>
  );
}
export default Button;
