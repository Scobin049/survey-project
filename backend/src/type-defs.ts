const typeDefs = `#graphql
type SurveyQuestionsOptions {
  id: String
  value: String
}
type SurveyQuestionsResponses {
  optionId: String
  count: Int
}
type SurveyQuestions {
  id: String
  isRequired: Boolean
  description: String
  options: [SurveyQuestionsOptions]
  responses: [SurveyQuestionsResponses]
}
type Surveys {
  id: String
  title: String
  loggedIn: Boolean
  isActive: Boolean
  answerCounter: Int
  questions: [SurveyQuestions],
  usersResponded: [String]
}

type Users {
  id: String
  username: String
  password: Boolean
  surveyResponded: [String]
}

type Query {
  users: [Users]
  surveys(loggedIn: Boolean, isActive: Boolean): [Surveys]
  getSurveyById(surveyId: String): Surveys
}

input SurveyQuestionsOptionsInput {
  id: String
  value: String
}
input SurveyQuestionsResponsesInput {
  optionId: String
  count: Int
}
input SurveyQuestionsInput {
  id: String
  isRequired: Boolean  
  description: String
  options: [SurveyQuestionsOptionsInput]
  responses: [SurveyQuestionsResponsesInput]
}
input SurveyInput {
  title: String
  loggedIn: Boolean
  isActive: Boolean
  questions: [SurveyQuestionsInput],
}

input SurveyUserResponseList {
  questionId: String!, optionId: String!
}

input SurveyUserResponse {
  surveyId: String!
  userId: String
  responses: [SurveyUserResponseList]
}

type Mutation {
  addSurvey(input: SurveyInput): Surveys
  addQuestionResponses(input: SurveyUserResponse): Surveys
  enableDisableSurvey(surveyId: String!, status: Boolean!): Surveys
  userLogin(username: String!, password: String!): Users
}
`;

export default typeDefs;
