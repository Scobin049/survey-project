import styled from 'styled-components/native';
import palette from '../../assets/images/palette';

export const Container = styled.View``;

export const GoBackButton = styled.TouchableOpacity`
  border-color: ${palette.lightGray};
  border-width: 2px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 19px;
`;

export const TitlePage = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const UserView = styled.View`
  width: 38px;
  height: 38px;
  background-color: ${palette.lightGray};
  border-radius: 19px;
  align-items: center;
  justify-content: center;
`;

export const ContainerTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const UserCaption = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;
