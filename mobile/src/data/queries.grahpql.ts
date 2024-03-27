import {gql} from '@apollo/client';

export const GET_SURVEYS = gql`
  query GetSurveys($status: Boolean) {
    surveys(isActive: $status) {
      id
      title
      loggedIn
      isActive
    }
  }
`;

export const GET_SURVEY_BY_ID = gql`
  query GetSurveyById($surveyId: String) {
    getSurveyById(surveyId: $surveyId) {
      title
      loggedIn
      isActive
      questions {
        id
        description
        isRequired
        options {
          value
          id
        }
      }
    }
  }
`;
