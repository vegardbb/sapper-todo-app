import http from 'http'
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
      console.error(err)
    }
  }
)

// node -r dotenv/config dotenv_config_path=/secret.env src/server.js

process.on('SIGINT', () => {
  closeConnection(connection)
  process.exit(0)
})
