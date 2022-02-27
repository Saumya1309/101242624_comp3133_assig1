require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');

const graphQlSchema = require('./graphql/schema');
const graphQlResolvers = require('./graphql/resolvers');
const isAuth = require('./middleware/authorization');
const app = express();

app.use(bodyParser.json());

app.use(isAuth);

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://Saumya1309:Saumya555@cluster0.evsto.mongodb.net/101242624_comp3133_assig1?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("MongoDB Connected Successfully..")
    app.listen(3000);
  })
  .catch(err => {
    console.log("MongoDB Connection Failed.. Try Again!")
    console.log(err);
  });
