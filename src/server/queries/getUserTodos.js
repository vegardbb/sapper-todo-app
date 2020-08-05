module.exports = id => `select * from Todos inner join Users on author=username where username = '${id}';`
