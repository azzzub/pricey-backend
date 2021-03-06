import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import dotenv from 'dotenv'
import TokpedFetch from './src/TokpedFetch'
import ShopeeFetch from './src/ShopeeFetch'
import EcomFetch from './src/EcomFetch'
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(helmet())

app.get('/tokped/simple', TokpedFetch)
app.get('/shopee/simple', ShopeeFetch)
app.get('/ecom/simple', EcomFetch)

app.get('/', (_req, res) => {
  res.json({ message: 'hello there!' })
})

app.get('*', (_req, res) => {
  res.status(404).json({ message: 'where u wanna go?' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
