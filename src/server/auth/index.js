const { generateHash, verifyHash } = require('./salt')

/**
 * @param {function} queryUserAsync Fetches a user having the value 'username' as ID
 * @param {function} getSaltAndHash Returns the salt and hash values from a user object returned by queryUserAsync
 */
module.exports = (queryUserAsync, getSaltAndHash) => async function authorizeUser(username, password) {
  const userObject = await queryUserAsync(username)
  const { hash, salt } = getSaltAndHash(userObject)
  const passwordHash = await generateHash(password, salt)
  return verifyHash(password, hash, salt)
}
