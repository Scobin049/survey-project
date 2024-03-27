import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import palette from '../../assets/images/palette';
import {
  ButtonAdmin,
  ButtonAdminText,
  ButtonSurveys,
  ButtonSurveysText,
  Container,
  ContainerLogin,
  ContainerSurveys,
  ImageSurvey,
} from './styles';

function InitialScreen({navigation}: any): React.JSX.Element {
  return (
    <Container>
      <ContainerSurveys>
        <ImageSurvey />
        <ButtonSurveys onPress={() => navigation.navigate('SurveyList')}>
          <ButtonSurveysText>Ver pesquisas</ButtonSurveysText>
          <Icon name="chevron-right" size={16} color={palette.white} />
        </ButtonSurveys>
      </ContainerSurveys>
      <ContainerLogin>
        <ButtonAdmin
          onPress={() => navigation.navigate('Login', {loginType: 'admin'})}>
          <ButtonAdminText>Entrar como administrador</ButtonAdminText>
        </ButtonAdmin>
      </ContainerLogin>
    </Container>
  );
}

export default InitialScreen;
