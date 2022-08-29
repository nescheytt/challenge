import express from 'express'
import cors from 'cors'

const routes = require("../server/routes")

// Create express server
const app = express()

// Express configuration
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use('/', routes)

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
