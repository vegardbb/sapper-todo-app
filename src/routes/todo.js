import getDB from '../server/database'
import getDateTime from '../server/getDateString'
import { createTodo, deleteTodo, editTodo, getUserTodos } from '../server/queries'
import generateToken from '../server/auth/generateToken'

export async function post(req, res) {
  try {
    const { userName } = req.session
    const { todoText } = req.body
    const id = generateToken(96, null)
    const date = getDateTime(new Date().toISOString())
    await createTodo(getDB(), id, todoText, date, userName)
    res.end(JSON.stringify({ success: true, id, date }))
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }))
  }
}

export async function del(req, res) {
  try {
    const { userName } = req.session
    const { todoID } = req.body
    await deleteTodo(getDB(), todoID, userName)
    res.end(JSON.stringify({ success: true }))
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }))
  }
}

export async function patch(req, res) {
  try {
    const { userName } = req.session
    const { todoID, todoText } = req.body
    await editTodo(getDB(), todoID, todoText, userName)
    res.end(JSON.stringify({ success: true }))
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }))
  }
}

export async function get(req, res) {
  try {
    const { userName } = req.session
    const todos = await getUserTodos(getDB(), userName)
    res.end(JSON.stringify({ success: true, todos }))
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }))
  }
}
