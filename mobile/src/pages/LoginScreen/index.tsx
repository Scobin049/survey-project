import React, {useEffect, useRef} from 'react';

import {useMainContext} from '../../context/main-context';

import {useMutation} from '@apollo/client';
import {Text, TextInput, ToastAndroid} from 'react-native';
import palette from '../../assets/images/palette';
import TitlePage from '../../components/TitlePage';
import {LoadingIndicator} from '../../components/global.styles';
import {SEND_LOGIN_USER} from '../../data/mutations.graphql';
import {ButtonLogin, ButtonLoginText, Container, InputLogin} from './styles';

function LoginScreen({route, navigation}: any): React.JSX.Element {
  const {loginType} = route.params;
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  let passwordRef = useRef<TextInput>(null);

  const [sendLogin, {error, data, loading}] = useMutation(SEND_LOGIN_USER, {
    variables: {username: email, password},
  });

  const {isLogged} = useMainContext();

  useEffect(() => {
    if (!data) {
      return;
    }

    if (data.userLogin) {
      isLogged(loginType === 'admin', data.userLogin);
      navigation.navigate('SurveyDashboard');
    } else {
      ToastAndroid.showWithGravityAndOffset(
        'Erro ao logar o usuário',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const login = () => {
    if (!email || !password) {
      ToastAndroid.showWithGravityAndOffset(
        'Email e senha devem ser preenchidos',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
    sendLogin();
  };

  return (
    <Container>
      <TitlePage>Faça login =D</TitlePage>
      <InputLogin
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => passwordRef?.current?.focus()}
      />
      <InputLogin
        ref={passwordRef}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onSubmitEditing={() => sendLogin()}
      />
      {error && <Text>{error.message}</Text>}
      {loading && <LoadingIndicator size="large" color={palette.primary} />}
      <ButtonLogin onPress={login}>
        <ButtonLoginText>Entrar</ButtonLoginText>
      </ButtonLogin>
    </Container>
  );
}
export default LoginScreen;
