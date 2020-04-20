import express from "express";
import bodyParser from "body-parser";
import { ApolloServer } from "./server";
const app = express();
app.use(bodyParser.json());

ApolloServer.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Express running at http://localhost:${PORT}`);
  console.log(
    `🚀 GraphQL playground ready at http://localhost:${PORT}/graphql`
  );
});
