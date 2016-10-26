'use strict';

/**
 * module dependencies
 */
var getDefaultContext = require( '../../../contexts/default' );
var getGenericPageContext = require( '../../../contexts/pages/generic' );
var getPageContext = require( '../../../contexts/pages/main' );
var getNumbersTrivia = require( '../../../helpers/get-numbers-trivia' );

/**
 * @param {IncomingMessage} req
 *
 * @param {ServerResponse} res
 * @param {Function} res.render
 *
 * @param {Function} next
 *
 * @returns {undefined}
 */
function get( req, res, next ) {
  var context;

  context = getDefaultContext( req );
  context = getGenericPageContext( req, context );
  context = getPageContext( context );

  getNumbersTrivia()
    .then(

      /**
       * @param {Object} result
       * @returns {undefined}
       */
      function ( result ) {
        context.trivia = JSON.parse( result.body ).text;
        res.render( context.template, context );
      }
    )
    .catch(

      /**
       * @param {Error} err
       * @returns {undefined}
       */
      function ( err ) {
        next( err );
      }
    );
}

module.exports = get;
