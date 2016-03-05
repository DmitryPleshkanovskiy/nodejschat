/**
 * Created by Nick on 22.02.2016.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var errorHandler = require('errorhandler')();
var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('./libs/mongoose');
var config = require('./config');
var log = require('./libs/log')(module);
var favicon = require('serve-favicon');
var morgan = require('morgan');
var HttpError = require('./error').HttpError;

var app = express();

app.set("env", 'development');

app.set('view engine', 'html');

http.createServer(app).listen(config.get("port"), function () {
    log.info("Express server listening on port: " + config.get("port"));
});


//app.use(favicon(__dirname + '/../client/assets/favicon.ico'));

app.use(morgan('dev'));

app.use(cookieParser());

//app.use(express.static(__dirname + '/../client'));

var MongoStore = require('connect-mongostore')(session);

app.use(session({
    secret: config.get("session:secret"),
    key: config.get("session:sid"),
    cookie: {
        "path": "/",
        "httpOnly": true,
        "maxAge": null
    },
    store: new MongoStore({'db':'chat'})
}));

/*
app.use(function (req, res, next) {
    req.session.numberOfVisits = req.session.numberOfVisits + 1 || 1;
    res.send("Visits: " + req.session.numberOfVisits);
});
*/

app.use(require('./middleware/sendHttpError'));

//require('./routes')(app);

app.use(express.static('client'));

app.route('/*')
    .get(function (req, res) {
        res.sendFile(path.join(__dirname, '../client', 'index.html'));
    });
/*

app.use(function (err, req, res, next) {
    if (typeof err == 'number') {
        err = new HttpError(err);
    }

    if (err instanceof HttpError) {
        res.sendHttpError(err);
    } else {
        if (app.get('env') == 'development') {
            //console.error(err.stack);
            //res.status(500).send(err.stack);
            errorHandler(err, req, res, next);
        } else {
            log.error(err);
            err = new HttpError(500);
            res.sendHttpError(500);
        }
    }

});*/
