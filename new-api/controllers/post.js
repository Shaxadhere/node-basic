const Post = require('../models/post')

exports.GetPosts = (req, res) => {
    const posts = Post.find().select("_id title body").then((posts) => {
        res.status(200).json({posts})
    }).catch(err => console.log(err))
}

exports.CreatePost = (req, res) => {
    const post = new Post(req.body)
    post.save().then((post) => {
        res.status(200).json({post})
    }).catch(err => console.log(err))
}

exports.ViewPost = (req, res) => {
    var id = req.body.id;
    const post = Post.findById(id).then((post) => {
        res.status(200).json({post})
    })
}

exports.UpdatePost = (req, res) => {
    var id = req.body.id;
    Post.findByIdAndUpdate(id, function(error){
        if(error){
            res.status(500).json({
                "message": "Internal server error"
            })
        }
        res.status(200).json({
            "message": "Post modified successfully"
        })
    }).catch(err => console.log(err))
}

exports.DeletePost = (req, res) => {
    var id = req.body.id;
    Post.findByIdAndDelete(id, function(error){
        if(error){
            res.status(500).json({
                "message": "Internal server error"
            })
        }
        res.status(200).json({
            "message": "Post deleted successfully"
        })
    })
}