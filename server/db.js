const mysql = require('mysql')

const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    pasdword: 'password',
    database: 'reminder'
})

module.exports = db;