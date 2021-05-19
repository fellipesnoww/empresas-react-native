import React, { useState } from 'react';
import {} from 'react-native';

import {
  Container,
  Title,
  LogoImage,
  InputText,
  ForgotPasswordContainer,
  Label,
  CreateAccountContainer,
  TextButton,
} from './styles';
import logoImg from '../../assets/logo_ioasys.png';
import Button from '../../components/Button';
import LoaderButton from '../../components/LoaderButton';

const Login: React.FC = () => {

  const [loading, setLoading] = useState(false);

  function handleSignIn(){
    setLoading(true);
  }

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
        <Button onPress={handleSignIn}>
          {loading ?
            (<LoaderButton />)
            : (<TextButton>Entrar</TextButton>)}
        </Button>
      </Container>
      <CreateAccountContainer>
        <Label>Quero me cadastrar</Label>
      </CreateAccountContainer>
    </>
  );
};

export default Login;
