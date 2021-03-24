const express = require('express')
const postController = require('../controllers/post')
const validator = require('../validator')

const router = express.Router()

//Get all posts
router.get('/', postController.getPosts)

//Get post by id
router.get('/post', postController.viewPost)

//Create post
router.post('/post', validator.createPostValidator, postController.createPost)

//Delete post by id
router.delete('/post', postController.deletePost)

//Update post by id
router.put('/post', validator.createPostValidator, postController.updatePost)


module.exports = router