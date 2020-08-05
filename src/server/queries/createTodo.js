module.exports = (todoID, text, date, createdBy) => `insert into Todos (id, content, created, author) values ('${todoID}', '${text}', '${date}', '${createdBy}');`
