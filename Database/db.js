const mysql = require(`mysql2/promise`);
const dotenv = require(`dotenv`);
dotenv.config();

const db=mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

async function testconection(){
    try {
        await db.getConnection()
        console.log("Database connected");
    } catch (error) {
        console.log("Conection Failed", error);
    }
}

async function query(command, params) {
    try {
        const [result]=await db.query(command, params ?? [])
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports= { db, testconection, query };