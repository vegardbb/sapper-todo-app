import express from 'express'
import helmet from 'helmet'

// todo: import connection-factory
// todo: server file
// todo: Use ES imports and Webpack config

export default function appFactory(processEnv) {
  const app = express()
  app.use(helmet())
  return app
}
