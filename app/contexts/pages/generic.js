'use strict';

/**
 * module variables
 */
var path;

/**
 * module dependencies
 */
path = require( 'path' );

/**
 * generic context for html pages
 *
 * @param {IncomingMessage} req
 * @param {IncomingMessage} req.session
 * @param {Object} context
 *
 * @returns {*}
 */
function getGenericPageContext( req, context ) {
  context.partials = {};
  context.partials[ 'html-open' ] = path.join( __dirname, '..', '..', 'views', 'html', 'open' );
  context.partials[ 'html-close' ] = path.join( __dirname, '..', '..', 'views', 'html', 'close' );

  return context;
}

module.exports = getGenericPageContext;
