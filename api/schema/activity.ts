import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Activity {
    id: String
    name: Name
    modified_at: String
    location: Location
    description: Description
    tags: [Tag]
    where_when_duration: Where
  }
  type Name {
    fi: String
    en: String
    sv: String
  }
  type Location {
    lat: String
    lon: String
    address: Address
  }
  type Address {
    street_address: String
    postal_code: String
    locality: String
  }
  type Description {
    body: String
    images: [Image]
  }
  type Image {
    url: String
  }
  type Tag {
    id: String
    name: String
  }
  type Where {
    where_and_when: String
    duration: String
  }
  directive @rest(url: String) on FIELD_DEFINITION
  extend type Query {
    activities: [Activity] @rest(url: "/v1/activities/")
  }
`;
