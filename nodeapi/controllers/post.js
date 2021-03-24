const Post = require('../models/post')

exports.getPosts = (req, res) => {
    const posts = Post.find().select('_id title body').then((posts) => {
        res.json({posts})
    }).catch(err => console.log(err))
}

exports.createPost = (req, res) => {
    const post = new Post(req.body);

    post.save().then(result => {
        res.json({post: result})
    })
}

exports.deletePost = (req, res) => {
    var id = req.body.id;
    Post.findByIdAndDelete(id, function (err) {
        if (err) {
            console.log(err.message);
            res.status(500).json({"error": "Internal server error"})
        }
        res.status(200).json({"message": "Post deleted successfully"})
    })
}

exports.viewPost = (req, res) => {
    var id = req.body.id;
    Post.findById(id).then((post) => {
        res.json({post})
    }).catch(err => console.log(err))
}

exports.updatePost = (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;
    Post.findByIdAndUpdate(id, {
        title: title,
        body: body
    }, function (err) {
        if(err){
            res.status(500).json({
                "message": "Internal server error"
            })
        }
        res.status(200).json({
            "message": "Post modified successfully"
        })
    })
}
