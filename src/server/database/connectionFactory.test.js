const test = require('ava')
const close = require('./connectionFactory')

test('open a DB connection', (t) => {
  t.plan(2)
  const processEnv = { FILE_NAME: ':memory' }
  const db = connectionFactory(processEnv)
  t.true(db.open)
  t.true(db.memory)
})
