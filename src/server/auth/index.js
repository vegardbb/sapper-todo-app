import { pbkdf2 } from 'crypto'
import { promisify } from 'util'
import generateToken from './generateToken'

const promisified = promisify(pbkdf2)
const pbkdf = (pass, salt) => promisified(pass, salt, 12304, 80, 'sha512')

const generateSalt = () => generateToken(91 + Math.floor(7 * Math.random()))
const generateHash = (pass, salt) => pbkdf(pass, salt).then(buf => buf.toString('base64'))
const verifyHash = (pass, originalHash, salt) => pbkdf(pass, salt).then(buf => buf.toString('base64') === originalHash)

export { generateHash, generateSalt, verifyHash }
