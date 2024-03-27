import styled from 'styled-components/native';
import palette from '../assets/images/palette';

export const GlobalContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${palette.white};
  padding: 8px 16px;
`;

export const LoadingIndicator = styled.ActivityIndicator`
  margin: 16px;
`;
