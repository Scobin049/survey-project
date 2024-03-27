import { GraphQLError } from "graphql";
import {
  ISurveyItem,
  ISurveyQuestion,
  ISurveyUserResponse,
  IUser,
  TypeLoginEnum,
} from "./types";

const users: IUser[] = [
  {
    id: "1",
    username: "marry-hammer@surveyproject.com",
    password: "123",
    typeLogin: TypeLoginEnum.ADMIN,
  },
  {
    id: "2",
    username: "john-doe@gmail.com",
    password: "123",
    typeLogin: TypeLoginEnum.USER,
    surveyResponded: [],
  },
];

const surveys: ISurveyItem[] = [
  {
    id: "1",
    title: "Survey test",
    loggedIn: false,
    isActive: true,
    answerCounter: 0,
    usersResponded: [],
    questions: [
      {
        id: "1",
        isRequired: false,
        description: "Question 1",
        responses: [],
        options: [
          { id: "1", value: "Option 1" },
          { id: "2", value: "Option 2" },
          { id: "3", value: "Option 3" },
        ],
      },
      {
        id: "2",
        isRequired: true,
        description: "Question 2",
        responses: [],
        options: [
          { id: "1", value: "Option 1" },
          { id: "2", value: "Option 2" },
        ],
      },
    ],
  },
];

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    surveys: (_parent: any, { loggedIn, isActive }: any) => {
      if (loggedIn) return surveys.filter((item) => item.loggedIn === loggedIn);
      if (isActive !== undefined)
        return surveys.filter((item) => item.isActive === isActive);

      return surveys;
    },
    getSurveyById: (_parent: any, { surveyId }: any) => {
      if (surveyId) return surveys.find((item) => item.id === surveyId);
      return null;
    },
  },
  Mutation: {
    addSurvey: (_parent: any, { input }: { input: ISurveyItem }) => {
      const questions: ISurveyQuestion[] = input.questions.map(
        (item, index) => {
          const options = item.options.map((item, optIndex) => {
            return { ...item, id: String(optIndex + 1) };
          });
          return { ...item, id: String(index + 1), responses: [], options };
        }
      );

      const newSurvey: ISurveyItem = {
        id: String(surveys.length + 1),
        title: input.title,
        isActive: input.isActive,
        loggedIn: input.loggedIn,
        questions: questions,
        usersResponded: [],
        answerCounter: 0,
      };
      surveys.push(newSurvey);
      return newSurvey;
    },
    enableDisableSurvey: (
      _parent: any,
      {
        surveyId,
        status,
      }: {
        surveyId: string;
        status: boolean;
      }
    ) => {
      const surveyIndex = surveys.findIndex((item) => item.id === surveyId);
      const auxSurvey: ISurveyItem = surveys[surveyIndex];
      auxSurvey.isActive = status;

      return auxSurvey;
    },
    addQuestionResponses: (
      _parent: any,
      {
        input,
      }: {
        input: ISurveyUserResponse;
      }
    ) => {
      const { surveyId, userId, responses } = input;

      const surveyIndex = surveys.findIndex((item) => item.id === surveyId);
      const auxSurvey: ISurveyItem = surveys[surveyIndex];

      if (auxSurvey.loggedIn && !userId)
        throw new GraphQLError("User required", {
          extensions: {
            code: "FORBIDDEN",
          },
        });

      const aux = auxSurvey.usersResponded.find((item) => item === userId);
      if (aux)
        throw new GraphQLError("User has already responded", {
          extensions: {
            code: "BAD_REQUEST",
          },
        });

      if (userId) {
        const userIndex = users.findIndex((item) => item.id === userId);

        if (userIndex === -1)
          throw new GraphQLError("User not found", {
            extensions: {
              code: "FORBIDDEN",
            },
          });

        const auxUser = users[userIndex];
        if (auxUser.typeLogin === TypeLoginEnum.ADMIN)
          throw new GraphQLError("Unauthorized user", {
            extensions: {
              code: "FORBIDDEN",
            },
          });
        auxUser.surveyResponded?.push(surveyId);
      }

      if (userId) auxSurvey.usersResponded.push(userId);
      auxSurvey.answerCounter++;

      responses.map(({ questionId, optionId }) => {
        auxSurvey.questions.map((item) => {
          if (item.id === questionId) {
            const optionExists = item.responses.find(
              (item) => item.optionId === optionId
            );
            if (optionExists) optionExists.count++;
            else item.responses.push({ optionId, count: 1 });
          }
        });
      });

      return auxSurvey;
    },
    userLogin: (
      _parent: any,
      {
        username,
        password,
      }: {
        username: string;
        password: string;
      }
    ) => {
      const userExists = users.find(
        (item) => item.username === username && item.password === password
      );

      return userExists;
    },
  },
};

export default resolvers;
