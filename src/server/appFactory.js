import express from 'express'
import helmet from 'helmet'
import sirv from 'sirv'
import compression from 'compression'
import * as sapper from '@sapper/server'

// todo: import connection-factory
// todo: server file
// todo: Use ES imports and Webpack config

export default function appFactory(processEnv) {
  const { NODE_ENV } = processEnv
  const dev = NODE_ENV === 'development'
  const app = express()
  app.use(helmet())
  app.use(compression({ threshold: 0 }))
  app.use(sirv('static', { dev }))
  app.use(sapper.middleware())
  return app
}
