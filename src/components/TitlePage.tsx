import React from 'react';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 16px;
`;

const TitlePage = ({children}: any) => <Title>{children}</Title>;

export default TitlePage;
