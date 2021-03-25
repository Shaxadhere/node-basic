const express = require('express')
const postController = require('../controllers/post')
const validator = require('../validator')

const router = express.Router()

router.get('/', postController.getPosts)

router.post('/post', postController.CreatePost)

router.get('/post', postController.ViewPost)

router.put('/post', postController.UpdatePost)

module.exports = router;