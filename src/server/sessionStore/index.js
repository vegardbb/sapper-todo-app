import { Store } from 'express-session'
import connectionFactory from '../database/connectionFactory'

const exists = thing => thing != null && typeof thing === 'object'

function getMaxAge(session) {
  if (exists(session)) {
    if (exists(session.cookie)) {
      const { maxAge } = session.cookie
      if (typeof maxAge === 'number') {
        return maxAge
      }
    }
  }
  return 1000 * 60 * 60 * 24 * 32
}

const getDateTime = dateString => `${dateString.slice(0, 10)} ${dateString.slice(11, 19)}`

export default class SQLiteSessionStore extends Store {
  constructor(processEnv) {
    super()
    this.db = connectionFactory(processEnv.SESSION_FILE)
  }

  destroy(sid, callback) {
    try {
      this.db.prepare('delete from TodoSessions where sid = ?;').run(sid)
      callback()
    } catch (e) { callback(e) }
  }

  get(sid, callback) {
    try {
      const row = this.db
        .prepare('select * from TodoSessions where sid = ? and ? <= expire;')
        .get(sid, getDateTime(new Date().toISOString()))
      callback(null, JSON.parse(row.SessionObject))
    } catch (e) {
      if (e.code === 'ENOENT') {
        callback(null, null)
      } else callback(e)
    }
  }

  set(sid, session, callback) {
    try {
      this.db
        .prepare('insert into or replace into TodoSessions values (?, ?, ?);')
        .run(
          sid,
          getDateTime(new Date(new Date().getTime() + getMaxAge(session)).toISOString()),
          JSON.stringify(session)
        )
      callback()
    } catch (e) { callback(e) }
  }

  touch(sid, session, callback) {
    if (exists(session) && exists(session.cookie) && session.cookie.expires) {
      try {
        this.db
          .prepare('update TodoSessions set expire = ? where sid = ? and ? <= expire;')
          .run(
            new Date(session.cookie.expires).getTime(),
            sid,
            getDateTime(new Date().toISOString())
          )
        callback(null, true)
      } catch (e) { callback(e) }
    } else callback(null, false)
  }
}
