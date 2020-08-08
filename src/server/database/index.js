import connectionFactory from './connectionFactory'

let db = null

export default function getDatabaseInstance(processEnv) {
  if (!db) {
    db = connectionFactory(processEnv.FILE_NAME)
  }
  return db
}
