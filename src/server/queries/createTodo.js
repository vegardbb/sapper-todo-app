// TODO: generate todoID using generateToken, and created is set using Date constructor, and the author parameter is prgrammatially set by the username in the session
module.exports = (db, todoID, text, date, createdBy) => db.prepare)'insert into Todos (id, content, created, author) values (?, ?, ?, ?);').run(todoID, text, date, createdBy)
