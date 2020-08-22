import { promisify } from 'util'

const prom = connection => promisify(connection.query)

export default prom
