'use strict';

/**
 * module dependencies
 */
var error = require( 'error' );
var errorLogger = require( 'error-logger' );
var express = require( 'express' );
var middleware = require( './app/middleware/default' );
var notFound = require( 'not-found' );
var routes = require( './app/routes' );

/**
 * create the app
 */
var app = express();

/**
 * view engine
 */
app.set( 'views', './app/views' );
app.set( 'view engine', 'hjs' );

/**
 * middleware
 */
middleware( app );

/**
 * routes
 */
routes( app, express );

/**
 * error handlers
 * need to be added after all “non-error” middleware and routes have been defined
 */
app.use( notFound );
app.use( errorLogger );
app.use( error );

module.exports = app;
