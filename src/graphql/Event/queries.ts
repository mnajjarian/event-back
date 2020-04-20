import { GraphQLList, GraphQLString } from "graphql";
import { GraphQLEvent } from "./Types/Event";

const eventQueries = {
  getEvents: {
    type: GraphQLList(GraphQLEvent),
  },
  getEventById: {
    type: GraphQLEvent,
    args: {
      id: {
        type: GraphQLString,
      },
    },
  },
};

export { eventQueries };
