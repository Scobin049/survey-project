import styled from 'styled-components/native';
import palette from '../../assets/images/palette';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.white};
  padding: 8px 16px;
`;

export const GoBackButton = styled.TouchableOpacity`
  border-color: ${palette.lightGray};
  border-width: 2px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 21px;
`;

export const ContainerNoData = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
