const express = require('express')
const controller = require('./controller')

const postRouter = express.Router()

postRouter.post('/addPost', controller.addPost)
postRouter.put('/changePost/:id', controller.updatePost)
postRouter.delete('/deletePost/:id')


module.exports = postRouter