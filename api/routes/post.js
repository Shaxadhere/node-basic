const express = require('express')
const postController = require('../controllers/post')
const validator = require('../validator')

const router = express.Router()

router.get('/', postController.getPosts)

router.post('/post', validator.createPostValidator, postController.CreatePost)

router.get('/post', postController.ViewPost)

router.put('/post', validator.createPostValidator, postController.UpdatePost)

router.delete('/post', postController.DeletePost)

module.exports = router;