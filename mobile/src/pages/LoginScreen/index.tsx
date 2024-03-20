import React from 'react';

import {useMainContext} from '../../context/main-context';

import TitlePage from '../../components/TitlePage';
import {ButtonLogin, ButtonLoginText, Container, InputLogin} from './styles';

function LoginScreen({route}: any): React.JSX.Element {
  const {loginType} = route.params;
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  console.log('loginType', loginType);

  const {isLogged} = useMainContext();

  const sendLogin = () => {
    isLogged(false);
  };

  return (
    <Container>
      <TitlePage>Faça login =D</TitlePage>
      <InputLogin
        onChangeText={setUser}
        value={user}
        placeholder="Digite seu email"
        keyboardType="email-address"
      />
      <InputLogin
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
      />
      <ButtonLogin onPress={sendLogin}>
        <ButtonLoginText>Entrar</ButtonLoginText>
      </ButtonLogin>
    </Container>
  );
}
export default LoginScreen;
