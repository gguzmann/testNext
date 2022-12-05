const { createPool } = require("mysql2/promise");

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: '3306',
    database: process.env.DB_NAME

})


// host: database-ceibo.c37dfqavir2c.us-east-2.rds.amazonaws.com
// user: admin
// pw: Admin1234
// port: '3306