import {useMutation, useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';

import {ActivityIndicator} from 'react-native';
import palette from '../../assets/images/palette';
import HeaderPage from '../../components/HeaderPage';
import ModalGlobal from '../../components/Modal';
import QuestionItem from '../../components/QuestionItem';
import {LoadingIndicator} from '../../components/global.styles';
import {useMainContext} from '../../context/main-context';
import {SEND_SURVEY_RESPONSE} from '../../data/mutations.graphql';
import {GET_SURVEY_BY_ID} from '../../data/queries.grahpql';
import {ButtonSurveys, ButtonSurveysText, Container} from './styles';

function SurveyResponseScreen({route, navigation}: any): React.JSX.Element {
  const {id, name} = route.params;

  const [questionsList, setQuestionsList] = useState<any[]>([]);
  const [error, setError] = useState('');
  const [errorDescription, setErrorDescription] = useState('');
  const {user} = useMainContext();
  const {loading, data} = useQuery(GET_SURVEY_BY_ID, {
    variables: {surveyId: id},
  });

  const [sendSurveyResponse, {loading: loadingSend}] =
    useMutation(SEND_SURVEY_RESPONSE);

  useEffect(() => {
    if (data !== undefined) {
      setQuestionsList(
        data.getSurveyById.questions.map(item => {
          return {...item, selectedOption: null};
        }),
      );
    }
  }, [data]);

  const handleOptionSelect = (questionId: string, optionId: string) => {
    const updatedQuestions = [...questionsList];
    const index = updatedQuestions.findIndex(item => item.id === questionId);
    updatedQuestions[index].selectedOption = optionId;

    setQuestionsList(updatedQuestions);
  };

  const handleSave = () => {
    const userId = user.id;
    const surveyId = id;

    if (!userId && data.getSurveyById.loggedIn) {
      setError('Você não está logado =/');
      setErrorDescription(
        'Para responder a essa pesquisa é necessário que esteja cadastrado no aplicativo',
      );
      return false;
    }

    const verifyUnfilledRequiredQuestions = questionsList.find(
      item => !item.selectedOption && item.isRequired,
    );
    if (verifyUnfilledRequiredQuestions) {
      return false;
    }

    const responses = questionsList
      .filter(item => !!item.selectedOption)
      .map(item => {
        return {questionId: item.id, optionId: item.selectedOption};
      });

    const payload = {surveyId, userId, responses};
    if (!userId) {
      delete payload.userId;
    }

    sendSurveyResponse({
      variables: {input: payload},
    });
  };

  // console.log('data', JSON.stringify(data, null, 2));

  return (
    <Container>
      <HeaderPage title={name} handleBack={navigation.goBack} />
      {questionsList.map(item => (
        <QuestionItem
          key={item.id}
          item={item}
          handleOptionSelect={handleOptionSelect}
        />
      ))}
      {loading && <LoadingIndicator size="large" color={palette.primary} />}
      <ButtonSurveys onPress={handleSave} disabled={!loadingSend}>
        {loadingSend ? (
          <ActivityIndicator color={palette.white} />
        ) : (
          <ButtonSurveysText>Enviar respostas</ButtonSurveysText>
        )}
      </ButtonSurveys>
      <ModalGlobal
        icon="exclamation-circle"
        message={error}
        description={errorDescription}
        open={error !== ''}
        setOpen={() => {
          setError('');
          setErrorDescription('');
        }}
      />
    </Container>
  );
}

export default SurveyResponseScreen;
