import * as functions from 'firebase-functions'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

exports.api = functions.https.onRequest(app)
