const Database = require('better-sqlite3')

module.exports = fileName => new Database(fileName, { readonly: false, timeout: 15000, verbose: console.log })
