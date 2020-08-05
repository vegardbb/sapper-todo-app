const test = require('ava')
const close = require('./closeConnection')

test('close a DB connection', (t) => {
  t.plan(1)
  const db = { open: true, close: () => { this.open = false } }
  close(db)
  t.false(db.open)
})
