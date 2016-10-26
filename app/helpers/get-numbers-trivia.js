'use strict';

/**
 * module dependencies
 */
var getGenericRequestOptions = require( 'generic-request-options' );
var getRequestAsBluebird = require( 'request-as-bluebird' );

/**
 * @returns {Promise}
 */
function getNumbersTrivia() {
  var request_options = {
    url: 'http://numbersapi.com/random?json'
  };

  return getRequestAsBluebird( getGenericRequestOptions( request_options ) );
}

module.exports = getNumbersTrivia;
