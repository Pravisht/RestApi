const express = require('express')
const app = express()
const port = 3000
const db=require('./Database/db');
const process_router= require('./router/route')
db();
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api',process_router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})