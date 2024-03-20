import React from 'react';

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
