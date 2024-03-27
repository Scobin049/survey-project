export interface ISurveyQuestion {
  id: string;
  isRequired: boolean;
  description: string;
  responses: { optionId: string; count: number }[];
  options: { id: string; value: string }[];
}

export interface ISurveyItem {
  id: string;
  title: string;
  loggedIn: boolean;
  isActive: boolean;
  answerCounter: number;

  usersResponded: string[];
  questions: ISurveyQuestion[];
}

export enum TypeLoginEnum {
  ADMIN = "admin",
  USER = "user",
}
export interface IUser {
  id: string;
  username: string;
  password: string;
  typeLogin: TypeLoginEnum;
  surveyResponded?: string[];
}

export interface ISurveyUserResponseList {
  questionId: string;
  optionId: string;
}

export interface ISurveyUserResponse {
  surveyId: string;
  userId: string;
  responses: ISurveyUserResponseList[];
}
