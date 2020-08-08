import test from 'ava'
import connectionFactory from './connectionFactory'

test('open a DB connection', t => {
  t.plan(2)
  const processEnv = { FILE_NAME: ':memory' }
  const db = connectionFactory(processEnv.FILE_NAME)
  t.true(db.open)
  t.true(db.memory)
})
