const createTodo = (db, todoID, text, date, createdBy) => db.prepare('insert into Todos (id, content, created, author) values (?, ?, ?, ?);').run(todoID, text, date, createdBy)

const createUser = (db, username, lastName, firstName, salt, hash) => db.prepare('insert into Users (username, familyName, christianName, salt, bloat) values (?, ?, ?, ?, ?);').run(username, lastName, firstName, salt, hash)

const deleteTodo = (db, id, user) => this.db.prepare('delete from Todos where id = ? and author = ?;').run(id, user)

const editTodo = (db, id, text, user) => db.prepare('update Todos set content = text where id = ? and author = ?;').run(text, id, user)

const getUserByID = (db, id) => db.prepare('select * from Users where username = ?;').get(id)

const getUserTodos = (db, username) => db.prepare('select id, content, created from Todos inner join Users on author=username where username = ?;').all(username)

export { createTodo, createUser, deleteTodo, editTodo, getUserByID, getUserTodos }
