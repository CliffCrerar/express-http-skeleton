'use strict';

var config = require( '../config' );

/**
 * default context for application
 *
 * @param {IncomingMessage} req
 * @param {IncomingMessage} req.session
 *
 * @returns {{}|*}
 */
function getDefaultContext( req ) {
  var context;

  context = {};
  context.lang = req.session.lang;
  context.csrfToken = req.csrfToken();
  context.development = config.development;

  return context;
}

module.exports = getDefaultContext;
