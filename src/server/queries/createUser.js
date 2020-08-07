// TODO: generate salt and hash using auth module in another module
module.exports = (db, username, lastName, firstName, salt, hash) => db.prepare('insert into Users (username, familyName, christianName, salt, bloat) values (?, ?, ?, ?, ?);').run(username, lastName, firstName, salt, hash)
