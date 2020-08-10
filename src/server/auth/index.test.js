import test from 'ava'
import { generateHash, generateSalt, verifyHash } from '.'

test('Is the generated salt a string and does it have a length', t => {
  const salt = generateSalt()
  t.true(typeof salt === 'string')
  t.true(salt.length > 0)
})

test('Generating a hash value and check if it is a string with a length', async t => {
  const res = await generateHash(
    'password',
    'OK0zapM9R0PNn+54YCl5EB9C0cdTE2eLtjSqRJPob189O97DuX5qZGHBhnDiu6hxt6xw89TYsTuLOCPXncVX89HMmOY5k'
  )
  t.true(typeof res === 'string')
  t.true(res.length > 0)
})

test('Verifying a hash value', async t => {
  const res = await verifyHash(
    'password',
    'q2W08IggPI7vE/uHbZ2uYTjCoCR1U4iC/e4fvphjESc/wuQFr6N1p6F6MBzT8T+totqs5B7LImDbywRxBBBH9s6XxPZKHRNhpkBM2g/v2v8=',
    'OK6hxt6xw89TY0zapM9R0PNn+54YCl5EB9C0cdTE2eLtjSqRJPob189O97DuX5qZGHBhnDiusTuLOCPXncVX89HMmOY5k'
  )
  t.true(res)
})

test('Verifying a hash value with a space appended to the password', async t => {
  const res = await verifyHash(
    'password ',
    'q2W08IggPI7vE/uHbZ2uYTjCoCR1U4iC/e4fvphjESc/wuQFr6N1p6F6MBzT8T+totqs5B7LImDbywRxBBBH9s6XxPZKHRNhpkBM2g/v2v8=',
    'OK6hxt6xw89TY0zapM9R0PNn+54YCl5EB9C0cdTE2eLtjSqRJPob189O97DuX5qZGHBhnDiusTuLOCPXncVX89HMmOY5k'
  )
  t.false(res)
})

test('Verifying a hash value with a space prepended to the password', async t => {
  const res = await verifyHash(
    ' password',
    'q2W08IggPI7vE/uHbZ2uYTjCoCR1U4iC/e4fvphjESc/wuQFr6N1p6F6MBzT8T+totqs5B7LImDbywRxBBBH9s6XxPZKHRNhpkBM2g/v2v8=',
    'OK6hxt6xw89TY0zapM9R0PNn+54YCl5EB9C0cdTE2eLtjSqRJPob189O97DuX5qZGHBhnDiusTuLOCPXncVX89HMmOY5k'
  )
  t.false(res)
})

test('Verifying a hash value with quotes used in the password', async t => {
  const res = await verifyHash(
    '\'password\'',
    'q2W08IggPI7vE/uHbZ2uYTjCoCR1U4iC/e4fvphjESc/wuQFr6N1p6F6MBzT8T+totqs5B7LImDbywRxBBBH9s6XxPZKHRNhpkBM2g/v2v8=',
    'OK6hxt6xw89TY0zapM9R0PNn+54YCl5EB9C0cdTE2eLtjSqRJPob189O97DuX5qZGHBhnDiusTuLOCPXncVX89HMmOY5k'
  )
  t.false(res)
})
