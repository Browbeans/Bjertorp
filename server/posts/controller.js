const Posts = require('./post.model')
const User = require('../users/user.model')

module.exports.addPost = async function(req, res, next ) {

    const { headline, text } = req.body
    if(req.session.role === 'admin') {
        const newPost = await new Posts ({
            headline: headline, 
            text: text
        })
        await newPost.save()
    } else {
        res.send('You need to be admin to create a post')
    }
}

module.exports.updatePost = async function(req, res, next) {
    const id = req.params.id
    const currentPost = await Posts.findByIdAndUpdate(id, {
        headline: req.body.headline, 
        text: req.body.text
    }) 

    if(currentPost) {
        res.status(200).json(currentPost)
    } else {
        res.status(404).json('cant find the product')
    }
}

