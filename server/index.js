const express = require('express')
const helmet = require('helmet')

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.get('/', (req, res) => {
  return res.json({ msg: 'The API is online!' })
});

app.listen(PORT)
console.log(`Server is running on localhost:${PORT}`)
