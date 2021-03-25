const express = require('express')
const postController = require('../controllers/post')
const validator = require('express-validator')

const router = express.Router()

router.get('/', postController.GetPosts)

router.post('/post', postController.CreatePost)

router.get('/post', postController.ViewPost)

router.put('/post', postController.UpdatePost)

router.delete('/post', postController.DeletePost)

module.exports = router