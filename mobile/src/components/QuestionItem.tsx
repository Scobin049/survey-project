/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const Box = styled.View`
  border-color: #637081;
  border-width: 1px;
  border-radius: 8px;
  margin: 8px 0;
  padding: 8px;
`;

const Description = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;
const DescriptionRequired = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #ef3054;
`;

const OptionButton = styled.TouchableOpacity`
  flex-direction: row;
  padding: 4px 0;
  align-items: center;
`;

const OptionView = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 16px;
  margin-right: 4px;
`;

const QuestionItem = ({item, handleOptionSelect}: any) => {
  return (
    <Box>
      <Description>
        {item.description}
        <DescriptionRequired>{item.isRequired && ' *'}</DescriptionRequired>
      </Description>
      {item.options.map((option: any) => (
        <OptionButton
          key={option.id}
          onPress={() => {
            handleOptionSelect(item.id, option.id);
          }}>
          <OptionView
            style={{
              backgroundColor:
                item.selectedOption === option.id ? '#ef3054' : '#637081',
            }}
          />
          <Text>{option.value}</Text>
        </OptionButton>
      ))}
    </Box>
  );
};

export default QuestionItem;
