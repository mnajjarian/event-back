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
  type OpeningHours {
    hours: OpeningHour
    openninghours_exeption: string
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
`;
