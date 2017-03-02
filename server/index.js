var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '../client')));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:3000/');
});