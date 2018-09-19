const express = require('express')
const app = express()
const router = require('./routes')
const middlewares = require('./middlewares')


middlewares(app)
router(app)


app.listen(3000, ()=> {
    console.log('Server\'s working!')
})

