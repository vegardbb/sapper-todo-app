const q = (db, id) => this.db.prepare('delete from Todos where id = ?;').run(id)

export default q
