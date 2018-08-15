var express = require('express');
var app = express();

app.set('views', __dirname + '/web');
app.use(express.static(__dirname + '/web'));

// set up views engine
app.set('view engine', 'html');

require('./routes/route')(app);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
