/* eslint no-process-env: off, global-require: off */

'use strict';

/**
 * module variables
 */
var config;

if ( process.env.NODE_ENV.toString().toLowerCase() === 'development' ) {
  config = require( './development' );
} else {
  config = require( './production' );
}

module.exports = config;
