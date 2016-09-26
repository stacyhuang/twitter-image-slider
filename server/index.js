import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import apiRoutes from './apiRoutes';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use('/', express.static('dist'));
app.use('/api', apiRoutes);

app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}.`);
  }
});
