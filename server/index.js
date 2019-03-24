const express = require('express')
const app = express()
const parser = require('body-parser')
const port = 4200

app.use(parser.json())

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))