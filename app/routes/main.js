/* eslint global-require: off */

'use strict';

/**
 * @param {Function} router
 * @param {Function} router.get
 *
 * @returns {undefined}
 */
function route( router ) {
  router.get( '/', require( '../middleware/pages/main/get' ) );
}

module.exports = route;
