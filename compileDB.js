const path = require('path')
const { exec } = require('child_process')
const { promisify } = require('util')
require('dotenv').config({ path: path.resolve(process.cwd(), 'secret.env') })

async function compileDB() {
  try {
    await promisify(exec)(`npm install better-sqlite3@'^7.1.0' --no-save --build-from-source --sqlite3="${process.env.DB_FOLDER}"`)
  } catch (e) {
    console.error(e)
  }
}

compileDB()
