import React from 'react';
import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: 18px;
`;
export const IconText = styled.Text`
  font-size: 22px;
  color: #ef3054;
  font-weight: bold;
`;
export const Box = styled.View`
  border-color: #d8ddde;
  border-width: 1px;
  border-radius: 8px;
  margin: 4px 0;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

type ItemProps = {title: string};

const SurveyItem = ({title}: ItemProps) => (
  <Box>
    <Title>{title}</Title>
    <IconText>{'>'}</IconText>
  </Box>
);

export default SurveyItem;
