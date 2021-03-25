const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const posts = Post.find().select("_id title body").then((posts) => {
        res.status(200).json({posts})
    }).catch(err => console.log(err))
}

exports.CreatePost = (req, res) => {
    const post = new Post(req.body);

    post.save().then((result) => {
        res.status(200).json({post: result})
    }).catch(err => console.log(err))
}

exports.ViewPost = (req, res) => {
    var id = req.body.id;
    const post = Post.findById(id).then((post) => {
        res.status(200).json({post})
    }).catch(err => console.log(err))
}

exports.UpdatePost = (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;

    Post.findByIdAndUpdate(id, {
        title: title,
        body: body
    }, function(err){
        if(err){
            res.status(500).json({
                "message":"Internal server error"
            })
        }
        res.status(200).json({
            "message":"Post modified successfully"
        })
    })
}

exports.DeletePost = (req, res) => {
    var id = req.body.id;
    Post.findByIdAndDelete(id, function (err){
        if(err){
            res.status(500).json({
                "message":"Internal server error"
            })
        }
        res.status(200).json({
            "message":"Post deleted successfully"
        })
    })
}
