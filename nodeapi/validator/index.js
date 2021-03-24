exports.createPostValidator = (req, res, next) => {
    //Title
    req.check('title', "Write a title").notEmpty()
    req.check('title', "Title must be between 4 to 150 charecters").isLength({
        min: 4, max: 150
    })
    //Body
    req.check('body', "Write a body").notEmpty()
    req.check('body', "body must be between 4 to 1000 charecters").isLength({
        min: 4, max: 1000
    })

    //Check for errors
    const errors = req.validationErrors()
    
    if(errors){
        const firstError = errors.map((error) => error.msg)[0]
        return res.status(400).json({error: firstError})
    }

    //proceed to next middleware
    next()
}