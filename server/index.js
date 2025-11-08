import express from 'express'
import cors from 'cors'
import todoRouter from './Router/todoRouter.js'
import dotenv from 'dotenv'

const port = process.env.PORT 
const app = express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))
app.use('/', todoRouter)



/*const openDb = () => {
    const pool = new Pool({
        user: process.env_DB_USER,
        host: process.env.DB_HOST,
        database: enviroment === 'development' ? process.env.DB_NAME :
        process.env.TEST_DB_NAME,
        passowrd: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    })
    return pool
} */

/*const openDb = ()=>{
    const pool = new Pool({
        user:'postgres',
        host:'localhost',
        database: 'todo_app',
        password:'admin',
        port: 5432
    })
    return pool
} */
/*pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL!'))
  .catch(err => console.error('❌ Connection error:', err.message)) */ //TESTAUS KOODIA


/*app.get('/', (req, res) => {
    //const pool = openDb()
   // res.status(200).json({result: "success"})
pool.query('SELECT * FROM task', (err, result)=> {
    if (err) {
        return res.status(500).json({error: err.message})
    }
    res.status(200).json(result.rows)
})
})

app.post('/create', (req, res) =>  {
    //const pool =openDb()
    const { task } = req.body

    if (!task) {
        return res.status(400).json({ error: 'Task is required' })
    }
    pool.query('INSERT INTO task (description) VALUES ($1) RETURNING id', [task.description], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message })
        }
        res.status(201).json({id: result.rows[0].id, description: task.description})
    })
})

app.delete('/delete/:id', (req, res) => {
    //const pool = openDb()
    const { id } = req.params

//console.log(`Deleting task with id: ${id}`)
pool.query('delete from task WHERE id = $1',
    [id], (err, result) => {
        if (err) {
            console.error(err.message)
            return res.status(500).json({ error: err.message })
        }
        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Task not found' })
        }
        return res.status(200).json({id:id})
    }
)

}) */

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        error: {
            message: err.message,
            statusCode: statusCode
        }
    })
})


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})