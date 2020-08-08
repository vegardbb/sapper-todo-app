// eslint-disable-next-line import/no-unresolved
import Database from 'better-sqlite3'

const factory = fileName => new Database(
  // eslint-disable-next-line no-console
  fileName, { readonly: false, timeout: 15000, verbose: console.log }
)

export default factory
