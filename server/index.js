const express = require('express');
const app = express();
const schema = require('./schema/schema');

const port = 4000;

schema.applyMiddleware({ app });

app.listen(port, () => {
  console.log('Server ist running');
});