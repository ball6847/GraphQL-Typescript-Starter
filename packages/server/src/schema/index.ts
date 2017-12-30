import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "./patient";

export const schema = makeExecutableSchema({ typeDefs, resolvers });
