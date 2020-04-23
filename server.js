var express = require ('express');
var bodyparser = require('body-parser');

var app = express();
app.use (bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

var sampleAPI = require ('./controllers/sample.controller');
app.use('/api', sampleAPI);

app.listen(5000);
console.log('Server is up and running on port 5000');