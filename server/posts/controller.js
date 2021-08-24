const Posts = require('./post.model')
const User = require('../users/user.model')

module.exports.addPost = async function(req, res, next ) {
    console.log(req.session.role)
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

