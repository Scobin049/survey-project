import styled from 'styled-components/native';
import palette from '../../assets/images/palette';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${palette.white};
  padding: 8px 16px;
`;

export const ButtonSurveys = styled.TouchableOpacity`
  background-color: ${palette.primary};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
`;

export const ButtonSurveysText = styled.Text`
  color: ${palette.white};
  font-size: 16px;
`;
