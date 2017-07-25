var express = require('express');
var app = express();
var request = require('request');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/results', function(req, res) {
  res.send('Hello, it works!');
});


app.listen(process.env.PORT || 3000, function() {
  console.log('Move App has started!!');
});
