const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json());

app.use(express.json({  }))

const PORT = config.get('port') || 5000

app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/link', require('./routes/links.routes'))
app.use('/t', require('./routes/redirect.routes'))

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const start = async () => {
  try {
    await mongoose.connect(config.get('mobgoUri'), { useNewUrlParser: true, useUnifiedTopology: true })
    app.listen(PORT, () => {
      console.log('APP HAS BENN STARTED')
    })

  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()
