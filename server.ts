import * as express from "express";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const apollo = require("./config/apollo");

apollo({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Express running at http://localhost:${PORT}`);
  console.log(
    `🚀 GraphQL playground ready at http://localhost:${PORT}/graphql`
  );
});
