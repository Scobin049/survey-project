import styled from 'styled-components/native';
import palette from '../../assets/images/palette';

export const Container = styled.SafeAreaView`
  background-color: ${palette.white};
  flex: 1;
  padding: 8px 16px;
  padding-top: 32px;
`;

export const InputLogin = styled.TextInput`
  border-width: 1px;
  border-color: ${palette.lightGray};
  margin: 8px 0;
  padding: 8px;
`;

export const TitleLogin = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const ButtonLogin = styled.TouchableOpacity`
  background-color: ${palette.primary};
  padding: 16px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLoginText = styled.Text`
  color: ${palette.white};
  font-size: 16px;
`;
