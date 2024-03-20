import React, {useEffect, useState} from 'react';

import QuestionItem from '../../components/QuestionItem';
import TitlePage from '../../components/TitlePage';
import {ButtonSurveys, ButtonSurveysText, Container} from './styles';

function SurveyResponseScreen({route}: any): React.JSX.Element {
  const {id, name} = route.params;

  const [questionsList, setQuestionsList] = useState<any[]>([]);

  useEffect(() => {
    setQuestionsList([
      {
        id: 'bd7acbea-c1b1-46c2-aed5-1',
        isRequired: false,
        description: 'Question 1',
        selectedOption: null,
        options: [
          {id: 'bd7acbea-c1b1-46c2-aed5-1-1', value: 'Option 1'},
          {id: 'bd7acbea-c1b1-46c2-aed5-1-2', value: 'Option 2'},
          {id: 'bd7acbea-c1b1-46c2-aed5-1-3', value: 'Option 3'},
          {id: 'bd7acbea-c1b1-46c2-aed5-1-4', value: 'Option 4'},
        ],
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-2',
        isRequired: true,
        description: 'Question 2',
        selectedOption: null,
        options: [
          {id: 'bd7acbea-c1b1-46c2-aed5-2-1', value: 'Option 1'},
          {id: 'bd7acbea-c1b1-46c2-aed5-2-2', value: 'Option 2'},
          {id: 'bd7acbea-c1b1-46c2-aed5-2-3', value: 'Option 3'},
          {id: 'bd7acbea-c1b1-46c2-aed5-2-4', value: 'Option 4'},
        ],
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-3',
        isRequired: true,
        description: 'Question 3',
        selectedOption: null,
        options: [
          {id: 'bd7acbea-c1b1-46c2-aed5-3-1', value: 'Option 1'},
          {id: 'bd7acbea-c1b1-46c2-aed5-3-2', value: 'Option 2'},
          {id: 'bd7acbea-c1b1-46c2-aed5-3-3', value: 'Option 3'},
          {id: 'bd7acbea-c1b1-46c2-aed5-3-4', value: 'Option 4'},
          {id: 'bd7acbea-c1b1-46c2-aed5-3-5', value: 'Option 5'},
        ],
      },
      {
        id: 'bd7acbea-c1b1-46c2-aed5-4',
        isRequired: false,
        description: 'Question 4',
        selectedOption: null,
        options: [
          {id: 'bd7acbea-c1b1-46c2-aed5-4-1', value: 'Option 1'},
          {id: 'bd7acbea-c1b1-46c2-aed5-4-2', value: 'Option 2'},
          {id: 'bd7acbea-c1b1-46c2-aed5-4-3', value: 'Option 3'},
        ],
      },
    ]);
  }, [id]);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    const updatedQuestions = [...questionsList];
    const index = updatedQuestions.findIndex(item => item.id === questionId);
    updatedQuestions[index].selectedOption = optionId;

    setQuestionsList(updatedQuestions);
  };

  const handleSave = () => {};

  return (
    <Container>
      <TitlePage>{name}</TitlePage>
      {questionsList.map(item => (
        <QuestionItem
          key={item.id}
          item={item}
          handleOptionSelect={handleOptionSelect}
        />
      ))}
      <ButtonSurveys onPress={handleSave}>
        <ButtonSurveysText>Enviar respostas</ButtonSurveysText>
      </ButtonSurveys>
    </Container>
  );
}

export default SurveyResponseScreen;
