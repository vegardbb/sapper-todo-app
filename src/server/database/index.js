import connectionFactory from './connectionFactory'

let db = null

export default function getDatabaseInstance(processEnv) {
  if (!db) {
    db = connectionFactory(processEnv)
  }
  return db
}
