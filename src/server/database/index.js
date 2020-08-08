const connectionFactory = require('./connectionFactory')

let db = null

module.exports = function getDatabaseInstance(processEnv) {
  if (!db) {
    db = connectionFactory(processEnv.FILE_NAME)
  }
  return db
}
