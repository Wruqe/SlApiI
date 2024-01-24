const router = require('express').Router()
const {
    User, Post, Comment
} = require('../../models')

router.get('/', (req, res) => {
    Post.findAll({include: [User, Comment]}).then(data => {res.json(data)})
})

router.post('/', (req, res)=>{
    const postObject = {
        content: req.body.content,
        userId: req.session.user_id
    }
    Post.create(postObject).then(postData => {
        res.json(postData)
    })
})




module.exports = router