var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var db = require('./database')

db.sync({alter:true})
var cors = require('cors')

var user = require('./routes/user');
var admin = require('./routes/admin');
const { auth } = require('./auth');

var app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.use(cors({ origin: "*" }))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('*secure*',auth)


app.use('/api/v1/user', user);
app.use('/api/v1/admin', admin);

module.exports = app;
