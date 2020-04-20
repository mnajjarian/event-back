import { GraphQLString, GraphQLObjectType, GraphQLList } from "graphql";

export const GraphQLName = new GraphQLObjectType({
  name: "Name",
  fields: () => ({
    fi: {
      type: GraphQLString,
    },
    en: {
      type: GraphQLString,
    },
    sv: {
      type: GraphQLString,
    },
  }),
});
export const GraphQLLocation = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    lat: {
      type: GraphQLString,
    },
    lon: {
      type: GraphQLString,
    },
    address: {
      type: GraphQLString,
    },
  }),
});

export const GraphQLDescription = new GraphQLObjectType({
  name: "Description",
  fields: () => ({
    body: {
      type: GraphQLString,
    },
    images: {
      type: GraphQLList(GraphQLImage),
    },
  }),
});

export const GraphQLImage = new GraphQLObjectType({
  name: "Image",
  fields: () => ({
    url: {
      type: GraphQLString,
    },
  }),
});
export const GraphQLTag = new GraphQLObjectType({
  name: "Tag",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
  }),
});
