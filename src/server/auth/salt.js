const { pbkdf2 } = require('crypto');
const { promisify } = require('util');

const generateToken = require('./generateToken');

const promisified = promisify(pbkdf2);
const pbkdf = (pass, salt) => promisified(pass, salt, 12304, 80, 'sha512');

exports.generateSalt = () => generateToken(91 + Math.floor(7 * Math.random()));
exports.generateHash = (pass, salt) => pbkdf(pass, salt).then(buf => buf.toString('base64'));
exports.verifyHash = (pass, originalHash, salt) => pbkdf(pass, salt).then(buf => buf.toString('base64') === originalHash);
