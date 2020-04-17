import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Event {
    id: String
    name: Name
    info_url: String
    modified_at: String
    location: Location
    description: Description
    tags: [Tag]
    event_dates: EventDates
  }
  type Name {
    en: String
    fi: String
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
    intro: String
    body: String
    images: [Image]
  }
  type Image {
    url: String
    copyright_holder: String
  }
  type Tag {
    id: String
    name: String
  }
  type EventDates {
    starting_day: String
    ending_day: String
    additional_description: MoreInfo
  }
  type MoreInfo {
    lang_code: String
    text: String
  }
  directive @rest(url: String) on FIELD_DEFINITION
  extend type Query {
    events: [Event] @rest(url: "/v1/events/")
  }
`;
