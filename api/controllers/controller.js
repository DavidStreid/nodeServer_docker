'use strict';
const logger = require('../utils/logger');
const env = require('../environment');

/*
************** ROUTE TEMPLATE **************

exports.ROUTE_METHOD = function(req, res){
  logger.debug('controller::ROUTE_METHOD');
  setCORSHeaders(res, allowedOrigins, ["POST"]);

  // ...do stuff

  res.send({ 'body': 'payload' })
};

*/

function setCORSHeaders(res, origins, methods){
  // Returns CORS headers in pre-flight request
  res.setHeader("Access-Control-Allow-Origin", env.allowedOrigins.join(',') );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader('Access-Control-Allow-Methods', methods.join(","));
  res.setHeader("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
}
