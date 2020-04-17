import { typeDef as Activity } from "../api/schema/activity";
import { typeDef as Event } from "../api/schema/event";
import resolvers from "../api/resolvers";
import { RestDirective } from "../api/directives";
import {
  makeExecutableSchema,
  mergeSchemas,
  gql,
  ApolloServer,
} from "apollo-server-express";

module.exports = ({ app }) => {
  const Query = gql`
    type Query {
      _empty: String
    }
  `;

  const EventSchema = makeExecutableSchema({
    typeDefs: [Query, Event],
  });

  const ActivitySchema = makeExecutableSchema({
    typeDefs: [Query, Activity],
  });
  const Schema = mergeSchemas({
    schemas: [EventSchema, ActivitySchema],
    resolvers: resolvers,
    schemaDirectives: {
      rest: RestDirective,
    },
  });

  const server = new ApolloServer({ schema: Schema });

  server.applyMiddleware({ app });
};
