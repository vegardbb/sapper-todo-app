import http from 'http'
import 'dotenv/config'
import appFactory from './server/appFactory'
import instantiateDB from './server/database'
import closeConnection from './server/database/closeConnection'

const app = appFactory(process.env)
const connection = instantiateDB(process.env)
const server = http.createServer(app)
const { PORT } = process.env
server.listen(
  PORT,
  err => {
    if (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }
)

process.on('SIGINT', () => {
  closeConnection(connection)
  process.exit(0)
})
