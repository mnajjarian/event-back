import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import {
  GraphQLName,
  GraphQLDescription,
  GraphQLTag,
  GraphQLLocation,
} from "../../shared";

const GraphQLActivity = new GraphQLObjectType({
  name: "Activity",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLName,
    },
    modified_at: {
      type: GraphQLString,
    },
    location: {
      type: GraphQLLocation,
    },
    description: {
      type: GraphQLDescription,
    },
    tags: {
      type: GraphQLList(GraphQLTag),
    },
    where_when_duration: {
      type: WhereWhenDuration,
    },
  }),
});

const WhereWhenDuration = new GraphQLObjectType({
  name: "WhereWhenDuration",
  fields: () => ({
    where_and_when: {
      type: GraphQLString,
    },
    duration: {
      type: GraphQLString,
    },
  }),
});

export { GraphQLActivity };
