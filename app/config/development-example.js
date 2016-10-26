/* eslint no-process-env: off */

'use strict';

var config = {
  cookie: {
    expires: new Date( new Date().getTime() + ( 85 * 365 * 24 * 60 * 60 * 1000 ) ),
    keys: [ 'your', 'cookie', 'key' ],
    maxAge: 85 * 365 * 24 * 60 * 60 * 1000
  },
  development: true,
  ip_address: process.env.NODE_IP_ADDRESS || '',
  morgan_logging: true,
  port: 8080,
  ssl: {
    crt: process.env.SSL_CRT.toString(),
    key: process.env.SSL_KEY.toString()
  }
};

module.exports = config;
