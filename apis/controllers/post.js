const Post = require('../models/post')

exports.GetPosts = (req, res) => {
    const posts = Post.find().select("_id title body").then((posts) => {
        res.status(200).json({posts})
    }).catch(err => console.log(err))
}

exports.ViewPost = (req, res) => {
    var id = req.body.id;
    const post = Post.findById(id).then((post) => {
        res.status(200).json({post})
    })
}

exports.CreatePost = (req, res) => {
    const post = new Post(req.body)
    post.save().then((post) => {
        res.status(200).json({post})
    }).catch(err => console.log(err))
}

exports.UpdatePost = (req, res) => {
    var id = req.body.id;
    var title = req.body.title
    var body = req.body.body


}