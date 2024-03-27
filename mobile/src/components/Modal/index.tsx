import React from 'react';
import {Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import palette from '../../assets/images/palette';
import {
  Background,
  CloseModal,
  CloseModalTitle,
  Container,
  Description,
  Title,
} from './styles';

const ModalGlobal = ({open, message, description, setOpen, icon}: any) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={open}
      onRequestClose={setOpen}>
      <Background>
        <Container>
          <Icon name={icon} size={32} color={palette.gray} />

          <Title>{message}</Title>
          <Description>{description}</Description>

          <CloseModal onPress={setOpen}>
            <CloseModalTitle>OK, entendi</CloseModalTitle>
          </CloseModal>
        </Container>
      </Background>
    </Modal>
  );
};

export default ModalGlobal;
