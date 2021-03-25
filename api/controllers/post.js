const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const posts = Post.find().select("_id title body").then((posts) => {
        res.status(200).json({posts})
    }).catch(err => console.log(err))
}