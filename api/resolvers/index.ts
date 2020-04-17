import { activityResolver } from "./activity";
import { eventResolver } from "./event";

export const resolvers = Object.assign(activityResolver, eventResolver);

export default { Query: resolvers };
