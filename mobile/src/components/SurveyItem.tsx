import React from 'react';
import styled from 'styled-components/native';
import palette from '../assets/images/palette';

export const Title = styled.Text`
  font-size: 18px;
`;
export const IconText = styled.Text`
  font-size: 22px;
  color: ${palette.primary};
  font-weight: bold;
`;
export const Box = styled.TouchableOpacity`
  border-color: ${palette.gray};
  border-width: 1px;
  border-radius: 8px;
  margin: 4px 0;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

type ItemProps = {title: string; onPress: any};

const SurveyItem = ({title, onPress}: ItemProps) => (
  <Box onPress={onPress}>
    <Title>{title}</Title>
    <IconText>{'>'}</IconText>
  </Box>
);

export default SurveyItem;
