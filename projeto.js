'use strict'

var express = require('express');

var app = module.exports = express()

app.get('/', function(req, res){
  res.send('Hello World');
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
