import { ApolloServer as Server } from "apollo-server-express";
import { Schema } from "./graphql/schema";

export const ApolloServer = new Server({ schema: Schema });
