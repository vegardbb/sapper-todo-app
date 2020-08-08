const express = require('express')
const helmet = require('helmet') // todo: install

// todo: import connection-factory
// todo: server file
// todo: Use ES imports and Webpack config

module.exports = function appFactory(processEnv) {
  const app = express()
  app.use(helmet())
  return app
};
