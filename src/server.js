import appFactory from './server/appFactory'
import http from 'http'

const app = appFactory(process.env)
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
  closeConnection()
  process.exit(0)
})
