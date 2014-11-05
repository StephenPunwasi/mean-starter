//DEPENDENCIES
var express     = require('express'),
    app         = express(),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    methodOverride= require('method-override');

//CONFIGURATION

//CONFIG FILES
var db = require('./config/db');

//PORT
var port = process.env.PORT || 8080;

//mongoose.connect(db.url);

// PARSE APPLICATION/JSON
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('X-HTTP-Method-Override'));


require('./app/routes')(app); //configure routes

//START APP
app.listen(port);

console.log('Server running on ' + port);
exports = module.exports = app;
