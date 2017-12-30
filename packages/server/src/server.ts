import "./environment";

import { graphiqlExpress, graphqlExpress } from "apollo-server-express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from "express";

import { schema } from "./schema";

const app = express();

app.use(cors());
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

if (process.env.NODE_ENV === "dev") {
  app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));
}

const PORT = 9000;

app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`);
});
