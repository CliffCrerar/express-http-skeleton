'use strict';

/**
 * module dependencies
 */
var path = require( 'path' );

/**
 * @param {Object} context
 *
 * @returns {*}
 */
function getHomePageContext( context ) {
  context.body = { id: 'main' };
  context.head = { title: 'express http skeleton' };
  context.partials.main = path.join( __dirname, '..', '..', 'views', 'pages', 'main' );
  context.template = context.partials.main;

  return context;
}

module.exports = getHomePageContext;
