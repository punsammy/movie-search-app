var express = require('express');
var app = express();
var request = require('request');

app.get('/results', function(req, res) {
  res.send('Hello, it works!');
});


app.listen(process.env.PORT || 3000, function() {
  console.log('Move App has started!!');
});
