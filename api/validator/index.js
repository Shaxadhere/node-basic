exports.createPostValidator = (req, res) => {
    req.check('title', "Write a title").notEmpty()
    req.check('title', 'Title must be between 4 to 140 charecters').isLength({
        min: 4, max: 140
    })

    req.check('body', 'Write a body').notEmpty()
    req.check('body', "Body must be between 4 to 1000 charecters").isLength({
        min: 4, max:1000
    })

    
}