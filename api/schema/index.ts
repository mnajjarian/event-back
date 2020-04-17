import { typeDef as Activity } from "./activity";
import { typeDef as Event } from "./event";
import resolvers from "../resolvers";

import { makeExecutableSchema, mergeSchemas, gql } from "apollo-server-express";
import { RestDirective } from "../directives";
import { GraphQLScalarType } from "graphql";

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

export const Schema = mergeSchemas({
  schemas: [EventSchema, ActivitySchema],
  resolvers: resolvers,
  schemaDirectives: {
    rest: RestDirective,
  },
});
