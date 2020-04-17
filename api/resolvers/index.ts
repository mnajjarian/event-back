import { activityResolver } from "./activity";
import { eventResolver } from "./event";
import { placeResolver } from "./place";

export const resolvers = Object.assign(
  activityResolver,
  eventResolver,
  placeResolver
);

export default { Query: resolvers };
