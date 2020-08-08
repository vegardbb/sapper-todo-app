import { verifyHash } from './salt'

/**
 * @param {function} queryUserAsync Fetches a user having the value 'username' as ID
 * @param {function} getSaltAndHash Returns the salt and hash values from a user
 * object returned by queryUserAsync
 */
const factory = (queryUserAsync, getSaltAndHash) => async function authorizeUser(
  username, password
) {
  const userObject = await queryUserAsync(username)
  const { hash, salt } = getSaltAndHash(userObject)
  return verifyHash(password, hash, salt)
}

export default factory
