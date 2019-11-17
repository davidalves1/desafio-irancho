const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')

const peopleRoutes = require('./src/routes/people.route')

const PORT = process.env.PORT || 3001
const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())

app.get('/', (req, res) => {
  return res.json({ response: { msg: 'It works!' }})
});

app.use('/pessoas', peopleRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`)
})
