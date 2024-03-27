import {gql} from '@apollo/client';

export const SEND_LOGIN_USER = gql`
  mutation UserLogin($username: String!, $password: String!) {
    userLogin(username: $username, password: $password) {
      id
      username
      surveyResponded
    }
  }
`;

export const SEND_SURVEY_RESPONSE = gql`
  mutation QuestionResponses($input: SurveyUserResponse) {
    addQuestionResponses(input: $input) {
      id
      title
      answerCounter
      questions {
        responses {
          optionId
          count
        }
        id
      }
    }
  }
`;
