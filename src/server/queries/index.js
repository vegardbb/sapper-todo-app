/** @todo Generate todoID using generateToken */
/** @todo The parameter 'created' is set using Date constructor */
/** @todo The author parameter is prgrammatially set by the username in the session */
const createTodo = (db, todoID, text, date, createdBy) => db.prepare('insert into Todos (id, content, created, author) values (?, ?, ?, ?);').run(todoID, text, date, createdBy)

/** @todo Generate salt and hash using auth module in another module */
const createUser = (db, username, lastName, firstName, salt, hash) => db.prepare('insert into Users (username, familyName, christianName, salt, bloat) values (?, ?, ?, ?, ?);').run(username, lastName, firstName, salt, hash)

const deleteTodo = (db, id) => this.db.prepare('delete from Todos where id = ?;').run(id)

const editTodo = (db, id, text) => db.prepare('update Todos set content = text where id = ?;').run(text, id)

const getUserByID = (db, id) => db.prepare('select username, familyName, christianName from Users where username = ?;').get(id)

const getUserTodos = (db, username) => db.prepare('select id, content, created from Todos inner join Users on author=username where username = ?;').all(username)

export { createTodo, createUser, deleteTodo, editTodo, getUserByID, getUserTodos }