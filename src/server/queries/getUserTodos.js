const q = (db, username) => db.prepare('select id, content, created from Todos inner join Users on author=username where username = ?;').all(username)

export default q
