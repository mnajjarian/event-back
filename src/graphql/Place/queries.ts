import { GraphQLList, GraphQLString } from "graphql";
import { GraphQLPlace } from "./Types/Place";

const placeQueries = {
  getPlaces: {
    type: GraphQLList(GraphQLPlace),
  },
  getPlaceById: {
    type: GraphQLPlace,
    args: {
      id: {
        type: GraphQLString,
      },
    },
  },
};

export { placeQueries };
