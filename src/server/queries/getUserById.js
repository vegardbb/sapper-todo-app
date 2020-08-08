const q = (db, id) => db.prepare('select username, familyName, christianName from Users where username = ?;').get(id)

export default q
