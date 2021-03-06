// POST route for creating a new user
import { promisify } from 'util'
import { generateSalt, generateHash } from '../server/auth'
import getDB from '../server/database'
import { createUser } from '../server/queries'

// eslint-disable-next-line import/prefer-default-export
export async function post(req, res) {
  try {
    const { username, password, firstName, lastName } = req.body
    const saveSession = promisify(req.session.save).bind(req.session)
    // generate hash and salt
    const salt = generateSalt()
    const hash = await generateHash(password, salt)
    await createUser(getDB(), username, lastName, firstName, salt, hash)
    req.session.firstName = firstName
    req.session.lastName = lastName
    req.session.userName = username
    await saveSession()
    res.end(JSON.stringify({ loginRequired: false, firstName, lastName, username }))
  } catch (error) {
    res.end(JSON.stringify({ loginRequired: true, error: error.message }))
  }
}
