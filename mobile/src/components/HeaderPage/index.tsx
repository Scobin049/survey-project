import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  ContainerTop,
  GoBackButton,
  TitlePage,
  UserCaption,
  UserView,
} from './styles';

const HeaderPage = ({title, handleBack, icon, user}: any) => {
  return (
    <Container>
      <ContainerTop>
        <GoBackButton onPress={handleBack}>
          <Icon name={icon || 'chevron-left'} size={16} />
        </GoBackButton>
        {user && (
          <UserView>
            <UserCaption>{String(user?.username[0]).toUpperCase()}</UserCaption>
          </UserView>
        )}
      </ContainerTop>
      <TitlePage>{title}</TitlePage>
    </Container>
  );
};

export default HeaderPage;
