/**
 * Created by Nick on 22.02.2016.
 */

var express = require('express');
var http = require('http');
var errorHandler = require('errorhandler')();
var config = require('./config');
var log = require('./libs/log')(module);
var favicon = require('serve-favicon');
var morgan = require('morgan');
var HttpError = require('./error').HttpError;

var app = express();

app.set("env", 'development');

http.createServer(app).listen(config.get("port"), function () {
    log.info("Express server listening on port: " + config.get("port"));
});


app.use(favicon(__dirname + '/../client/assets/favicon.ico'));

app.use(morgan('dev'));

app.use(require('./middleware/sendHttpError'));

require('./routes')(app);

app.use(express.static(__dirname + '/../client'));

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

});