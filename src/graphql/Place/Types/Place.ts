import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLBoolean,
} from "graphql";
import {
  GraphQLName,
  GraphQLLocation,
  GraphQLDescription,
  GraphQLTag,
} from "../../shared";

const GraphQLPlace = new GraphQLObjectType({
  name: "Place",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLName,
    },
    info_url: {
      type: GraphQLString,
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
    openning_hours: {
      type: OpeningHours,
    },
  }),
});
const OpeningHours = new GraphQLObjectType({
  name: "OpeningHours",
  fields: () => ({
    hours: {
      type: OpeningHour,
    },
    openninghours_exeption: {
      type: GraphQLString,
    },
  }),
});
const OpeningHour = new GraphQLObjectType({
  name: "OpeningHour",
  fields: () => ({
    weekday_id: {
      type: GraphQLInt,
    },
    opens: {
      type: OpeningHourTime,
    },
    closes: {
      type: OpeningHourTime,
    },
    open24h: {
      type: GraphQLBoolean,
    },
  }),
});
const OpeningHourTime = new GraphQLObjectType({
  name: "OpeningHourTime",
  fields: () => ({
    hours: {
      type: GraphQLInt,
    },
    minutes: {
      type: GraphQLInt,
    },
    second: {
      type: GraphQLInt,
    },
  }),
});

export { GraphQLPlace };
