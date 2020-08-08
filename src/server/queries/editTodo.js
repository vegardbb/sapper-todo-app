const q = (db, id, text) => db.prepare('update Todos set content = text where id = ?;').run(text, id)

export default q
