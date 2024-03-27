import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import resolvers from "./resolvers";
import typeDefs from "./type-defs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const main = async () => {
  const port = Number(process.env.PORT);

  const { url } = await startStandaloneServer(server, {
    listen: { port },
  });

  console.log(`🚀 Server ready at: ${url}`);
};

main();
