import { ActivityType, activityQueries } from "./activity";
import { EventType, eventQueries } from "./event";
import { PlaceType, placeQueries } from "./place";
import resolvers from "./resolvers";
import { mergeSchemas } from "apollo-server-express";
import { GraphQLSchema, GraphQLObjectType } from "graphql";

let ActivitySchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: activityQueries,
  }),
  types: ActivityType,
});
const EventSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: eventQueries,
  }),
  types: EventType,
});
const PlaceSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: placeQueries,
  }),
  types: PlaceType,
});

const Schema = mergeSchemas({
  schemas: [EventSchema, ActivitySchema, PlaceSchema],
  resolvers: resolvers,
});

export { Schema };
