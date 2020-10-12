import express from 'express'
import session from 'express-session'
import helmet from 'helmet'
import sirv from 'sirv'
import compression from 'compression'
import { json } from 'body-parser'
// eslint-disable-next-line import/no-extraneous-dependencies
import * as sapper from '@sapper/server'
import SqliteStore from './sessionStore'
import exists from './objectExists'

export default function appFactory(processEnv) {
  const { NODE_ENV, SECRET } = processEnv
  const dev = NODE_ENV === 'development'
  const app = express()
  // app.set('trust proxy', 1) // trust first proxy, enable in production
  app.use(helmet())
  app.use(json())
  app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 2764800000 },
    store: new SqliteStore(processEnv)
  }))
  app.use(compression({ threshold: 0 }))
  app.use(sirv('static', { dev }))
  app.use(sapper.middleware({
    session: req => {
      const { session: s } = req
      console.log(s)
      if (exists(s)) {
        const { christianName, familyName, userName } = s
        return {
          loginRequired: typeof userName !== 'string',
          firstName: typeof christianName === 'string' ? christianName : null,
          lastName: typeof familyName === 'string' ? familyName : null
        }
      }
      return { loginRequired: true, firstName: null, lastName: null }
    }
  }))
  return app
}
