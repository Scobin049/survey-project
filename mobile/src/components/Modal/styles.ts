import styled from 'styled-components/native';
import palette from '../../assets/images/palette';

export const Background = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 8px;
`;

export const Container = styled.View`
  background-color: ${palette.white};
  padding: 16px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 22px;
  margin-top: 16px;
  text-align: center;
`;
export const Description = styled.Text`
  font-size: 16px;
  margin-top: 4px;
  text-align: center;
`;

export const CloseModal = styled.TouchableOpacity`
  background-color: ${palette.primary};
  margin-top: 24px;
  padding: 8px 24px;
  border-radius: 8px;
`;

export const CloseModalTitle = styled.Text`
  color: ${palette.white};
  font-weight: bold;
  text-transform: uppercase;
`;
