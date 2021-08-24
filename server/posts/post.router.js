const express = require('express')
const controller = require('./controller')

const postRouter = express.Router()

postRouter.post('/addPost', controller.addPost)
postRouter.put('/changePost/:id')
postRouter.delete('/deletePost/:id')


module.exports = postRouter