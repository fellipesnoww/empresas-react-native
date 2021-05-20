import React, { useState } from 'react';
import {} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux';

import {
  Container,
  Title,
  LogoImage,
  ContainerInput,
  InputText,
  ForgotPasswordContainer,
  Label,
  CreateAccountContainer,
  TextButton,
} from './styles';
import logoImg from '../../assets/logo_ioasys.png';
import Button from '../../components/Button';
import LoaderButton from '../../components/LoaderButton';
import { signInRequest } from '../../store/modules/authentication/actions';

const Login: React.FC = () => {

  const [loading, setLoading] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailFilled, setEmailFilled] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [passwordFilled, setPassowordFilled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSignIn(){
    console.log(email, password);
    dispatch(signInRequest({email, password}))
    setLoading(true);
  }

  function handleChangeEmailText(value: string): void{
    setEmail(value);

    if(value) {
      setEmailFilled(true);
    } else {
      setEmailFilled(false);
    }

  }

  function handleChangePasswordText(value: string): void{
    setPassword(value);

    if(value) {
      setPassowordFilled(true);
    } else {
      setPassowordFilled(false);
    }
  }

  return (
    <>
      <Container>
        <LogoImage source={logoImg} />
        <Title>Faça seu Login</Title>
        <ContainerInput
          focused={emailFocused}
          filled={emailFilled}
        >
          <Icon
            name="user"
            size={22}
            color={emailFilled || emailFocused ? "#03fc30" : "#666360"}
            style={{marginRight: 10}}
            />

          <InputText
            placeholder="Seu e-email"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
            focused={emailFocused}
            onChangeText={(value: string) => handleChangeEmailText(value)}
            keyboardType="email-address"
          />
        </ContainerInput>
        <ContainerInput
          focused={passwordFocused}
          filled={passwordFilled}
        >
          <Icon
            name="lock"
            size={22}
            color={passwordFilled || passwordFocused ? "#03fc30" : "#666360"}
            style={{marginRight: 10}}
          />
          <InputText
            placeholder="Sua senha secreta"
            onFocus={() => setPasswordFocused(true)}
            onBlur={() => setPasswordFocused(false)}
            onChangeText={(value: string) => handleChangePasswordText(value)}
            secureTextEntry={showPassword}
          />
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color={passwordFilled || passwordFocused ? "#03fc30" : "#666360"}
            style={{}}
            onPress={() => setShowPassword(oldState => !oldState)}
          />
        </ContainerInput>
        <ForgotPasswordContainer>
          <Label>Esqueci minha senha</Label>
        </ForgotPasswordContainer>
        <Button
          onPress={handleSignIn}
          disabled={!emailFilled && !passwordFilled}
        >
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
