/**
 * @license
 * Copyright 2023 Google Inc. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');

const router = require('./routes');

const app = express();
const port = 8080;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/templates');
app.set('view cache', false);

app.use('/static', express.static('static'));
app.use('/', router);

app.listen(port, () => {
  console.log(`reCAPTCHA Demosite app listening on port ${port}`);
});
