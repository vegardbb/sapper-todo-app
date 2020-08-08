// TODO: generate salt and hash using auth module in another module
const q = (db, username, lastName, firstName, salt, hash) => db.prepare('insert into Users (username, familyName, christianName, salt, bloat) values (?, ?, ?, ?, ?);').run(username, lastName, firstName, salt, hash)

export default q
