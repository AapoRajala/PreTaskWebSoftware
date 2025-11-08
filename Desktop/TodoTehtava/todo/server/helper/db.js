import pkg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const environment = process.env.NODE_ENV || 'development'


const port = process.env.port
const { Pool } = pkg


    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: environment === 'development' ? process.env.DB_NAME :
        process.env.TEST_DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })


pool.connect()
  .then(() => console.log(`✅ Connected to PostgreSQL (${environment})!`))
  .catch((err) => console.error('❌ Connection error:', err.message));

export { pool };
