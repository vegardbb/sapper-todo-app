import test from 'ava'
import appFactory from './appFactory'

test('check the routes in the Express App', t => {
  const app = appFactory({})
  const helmetMiddlewares = app._router.stack.filter(layer => layer.name === 'helmet')
  const routes = app._router.stack
    .filter(layer => layer.route != null).map(layer => layer.route.path)
  t.is(helmetMiddlewares.length, 1)
  t.true(routes.includes('/'))
})
