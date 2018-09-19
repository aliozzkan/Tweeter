const mongoose = require('mongoose')
const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const getUsers = (req, res) => {
    User.find().exec()
        .then(docs => {
            if (docs.length == 0) {
                return res.status(404).json({
                    message: 'Not found user'
                })
            }

            res.status(200).json(
                docs.map(doc => {
                    return {
                        username: doc.username,
                        email: doc.email,
                        img: 'http://localhost:3000/uploads/' + doc.img,
                        path: 'http://localhost:3000/users/' + doc._id
                    }
                })
            )

        })
        .catch(err => {
            res.status(500).json({
                message: 'Not found user'
            })
        })
}

const getUser = (req, res) => {
    const id = req.params.id
    User.findById(id).exec()
        .then(doc => {
            if (!doc) {
                return res.status(404).json({
                    message: 'Not found user'
                })
            }
            res.status(200).json({
                username: doc.username,
                email: doc.email,
                img: 'http://localhost:3000/uploads/' + doc.img,
            })
        })
        .catch(err => {
            res.status(500).json({
                message: 'Not found user'
            })
        })
}

const setUser = (req, res) => {

    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(req.body.password, salt, function (err, hash) {
            if(err){
                return res.status(err)
            }
            const newUser = new User({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                email: req.body.email,
                password: hash
            })
            newUser.save()
                .then(response => {
                    res.status(200).json({
                        message: 'User saved succesfully',
                        user: response
                    })
                })
                .catch(err => {
                    res.status(500).json({
                        message: 'User saved faild',
                        error: err
                    })
                })
        })
    })


}

const login = (req, res) => {
    User.findOne({email: req.body.email}).exec().then(user => {
        if(!user) {
            return res.status(500).json({
                message: 'Auth Failed'
            })
        }

        bcrypt.compare(req.body.password, user.password, function(err, isMatch) {
            if(!isMatch){
                return res.status(500).json({
                    message: 'Auth Failed'
                })
            }

            const sendUser = {
                username: user.username,
                email: user.email,
                img:  user.img
            
            }

            const token = jwt.sign(sendUser, 'secret_key', {expiresIn: '1h'})
            res.status(201).json({
                message: 'Login Success',
                user: sendUser,
                token
            })
        });
        
        
    }).catch(err => {
        res.status(500).json({
            message: 'Auth Failed'
        })
    })
}

const deleteUser = (req, res) => {
    const id = req.params.id
    User.findByIdAndRemove(id).exec().then(response => {
        res.status(200).json({
            message: 'User deleted'
        })
    }).catch(err => res.status(500).json({err}))
}

module.exports = {
    getUsers,
    getUser,
    setUser,
    login,
    deleteUser
}