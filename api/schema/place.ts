import { gql } from "apollo-server-express";

export const typeDef = gql`
  type Place {
    id: String
    name: Name
    info_url: String
    modified_at: String
    location: Location
    description: Description
    tags: [Tag]
    openning_hours: OpeningHours
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
  type OpeningHours {
    hours: OpeningHour
    openninghours_exeption: String
  }
  type OpeningHour {
    weekday_id: Int
    opens: OpeningHourTime
    closes: OpeningHourTime
    open24h: Boolean
  }
  type OpeningHourTime {
    hours: Int
    minutes: Int
    second: Int
  }
  directive @rest(url: String) on FIELD_DEFINITION
  extend type Query {
    places: [Place] @rest(url: "/v1/places/")
  }
`;
