import { GraphQLList, GraphQLString } from "graphql";
import { GraphQLActivity } from "./Types/Activity";

const activityQueries = {
  getActivities: {
    type: GraphQLList(GraphQLActivity),
  },
  getActivityById: {
    type: GraphQLActivity,
    args: {
      id: {
        type: GraphQLString,
      },
    },
  },
};

export default activityQueries;
