import runQuery from './runQuery'

const createTodo = (db, todoID, text, date, createdBy) => runQuery(db)('insert into Todos (id, content, created, author) values (?, ?, ?, ?);', [todoID, text, date, createdBy])

const createUser = (db, username, lastName, firstName, salt, hash) => runQuery(db)('insert into Users (username, familyName, christianName, salt, bloat) values (?, ?, ?, ?, ?);', [username, lastName, firstName, salt, hash])

const deleteTodo = (db, id, user) => runQuery(db)('delete from Todos where id = ? and author = ?;', [id, user])

const editTodo = (db, id, text, user) => runQuery(db)('update Todos set content = text where id = ? and author = ?;', [text, id, user])

const getUserByID = (db, id) => runQuery(db)('select * from Users where username = ?;', id)

const getUserTodos = (db, username) => runQuery(db)('select id, content, created from Todos inner join Users on author=username where username = ?;', username) // all

export { createTodo, createUser, deleteTodo, editTodo, getUserByID, getUserTodos }
