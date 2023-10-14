const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'test',
    database: 'search',
    connectionLimit: 10,
});

async function performDynamicQuery(query, params) {
    const connection = await pool.promise().getConnection();
    try {
        const [rows, fields] = await connection.query(query, params);
        return rows;
    } catch (err) {
        throw err;
    } finally {
        connection.release();
    }
}

module.exports = {
    performDynamicQuery,
};