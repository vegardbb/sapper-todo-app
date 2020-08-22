/* eslint-disable import/prefer-default-export */
import { promisify } from 'util'
import { verifyHash } from '../server/auth'
import getDB from '../server/database'
import { getUserByID } from '../server/queries'

export async function post(req, res) {
  try {
    const { username, password } = req.body
    const saveSession = promisify(req.session.save).bind(req.session)
    const userRow = await getUserByID(getDB(), username)
    const { salt, bloat, familyName, christianName } = userRow[0]
    const isValidSession = await verifyHash(password, bloat, salt)
    if (isValidSession) {
      req.session.firstName = christianName
      req.session.lastName = familyName
      req.session.userName = username
      const sess = { ...req.session }
      await saveSession()
      res.end(JSON.stringify(sess))
    } else {
      res.end(JSON.stringify({ loginRequired: true, error: 'Invalid password' }))
    }
  } catch (error) {
    res.end(JSON.stringify({ loginRequired: true, error: error.message }))
  }
}
