const mysql = require('mysql')

const conn = mysql.createConnection(
    {
        user: 'dheimas',
        password: 'akuganteng',
        host: 'db4free.net',
        database: 'dhimas1',
        port : 3306
    }
)

module.exports = conn