const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send(' Backend running ec2 Hello World!')
})

app.listen(port, () => {
  console.log(`Backend is running on port ${port}`)
})