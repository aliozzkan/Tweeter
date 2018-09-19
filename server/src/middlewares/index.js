const bodyParser = require('body-parser')
const Cors = require('cors')
const mongoose = require('mongoose')
const morgan = require('morgan')
const express = require('express')

module.exports = (app) => {
    app.use(morgan('dev'));
    app.use('/uploads', express.static('uploads'));
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(Cors())

    mongoose.connect(
        'mongodb://admin:pass123@ds161102.mlab.com:61102/tweeter', {
            useNewUrlParser: true
        },
        (err) => {
            if (err) {
                console.error(err)
            } else(console.log('Connected MongoDB'))
        })
    mongoose.set('useCreateIndex', true);
}