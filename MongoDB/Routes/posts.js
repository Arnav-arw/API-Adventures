const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
    res.send('Hello Posts!');
    });

router.post('/', (req, res) => {
    const post = new Post({
        title: req.body.title,
        desc: req.body.desc
    });
    post.save()
    .then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
});

module.exports = router;