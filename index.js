'use strict';
import express from 'express';
let app = express();

app.get('/', function (req, res) {
  res.send('Hello World with pm2');
});

const server = app.listen(8081,function () {
});