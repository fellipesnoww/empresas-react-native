import React from 'react';
import {} from 'react-native';

import {
  Container,
  Title,
  LogoImage,
  InputText,
  ForgotPasswordContainer,
  Label,
  CreateAccountContainer,
} from './styles';
import logoImg from '../../assets/logo_ioasys.png';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <>
      <Container>
        <LogoImage source={logoImg} />
        <Title>Faça seu Login</Title>
        <InputText placeholder="Seu e-email" />
        <InputText placeholder="Sua senha secreta" secureTextEntry />
        <ForgotPasswordContainer>
          <Label>Esqueci minha senha</Label>
        </ForgotPasswordContainer>
        <Button title="Entrar" />
      </Container>
      <CreateAccountContainer>
        <Label>Quero me cadastrar</Label>
      </CreateAccountContainer>
    </>
  );
};

export default Login;
