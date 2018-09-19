const tweetsRoute = require('./tweets')
const usersRoute = require('./users')


module.exports = (app) => {
    app.use('/tweets', tweetsRoute)
    app.use('/users', usersRoute)

}