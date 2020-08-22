import { createConnection } from 'mysql'

const factory = ({ host, user, password }) => createConnection({ host, user, password })

export default factory
