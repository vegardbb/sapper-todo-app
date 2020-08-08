import appFactory from './server/appFactory'
import serverFactory from './server/serverFactory'

const app = appFactory(process.env)
const server = serverFactory(process.env, app)
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
