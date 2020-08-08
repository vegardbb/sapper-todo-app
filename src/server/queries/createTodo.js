// TODO: generate todoID using generateToken, and created is set using Date constructor
// The author parameter is prgrammatially set by the username in the session
const q = (db, todoID, text, date, createdBy) => db.prepare('insert into Todos (id, content, created, author) values (?, ?, ?, ?);').run(todoID, text, date, createdBy)

export default q
