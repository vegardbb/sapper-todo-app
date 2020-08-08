import { randomBytes } from 'crypto'

/**
 * @function getRandomLetter
 * Generates a random letter amongst the ones present in the string of url-safe characters
 * @return {String} A letter to replace either a + or /
 */
const getRandomLetter = () => '5vWcDd8EeZzF6fGgHrS3sTthI0iJajP4pQqRm_NnOo9K-k7LlMwX2xYyABbCU1uV'.split('')[Math.floor(Math.random() * 64)]

/**
 * Generates a string of length len
 * If the function randomBytes fails, use getRandomLetter
 * to generate one new letter for each index
 * @param {Number} len - Indicates the string size, denoted in the amount of characters,
 * to be generated in the token
 * @param {Boolean} url - Flag indicating whether the string must be url-safe
 * @return {String} The string to be used as either a secret or in URL
 */
export default function generateToken(len, url = false) {
  // Get the number of bytes to generate.
  // Each Base64 digit represents exactly 6 bits of data
  const x = Math.ceil((len * 3) / 4)
  let token = ''
  try {
    token = randomBytes(x).toString('base64')
    if (url) {
      token = token.split('/').join('').split('+').join('')
    }
    if (token.length > len) {
      token = token.substring(0, len)
    }
    while (token.length < len) {
      token = `${getRandomLetter()}${token}`
    }
  } catch (e) {
    while (token.length < len) {
      token = `${token}${getRandomLetter()}`
    }
  }
  return token
}
