/**
 * Created by Nick on 02.03.2016.
 */
var path = require('path');
var util = require('util');
var http = require('http');

function HttpError(status, messgae) {
    Error.apply(this.arguments);
    Error.captureStackTrace(this, HttpError);

    this.status = status;
    this.message = messgae || http.STATUS_CODES[status] || "Error";
}

util.inherits(HttpError, Error);

HttpError.prototype.name = 'HttpError';

exports.HttpError = HttpError;