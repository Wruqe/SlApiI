const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utility/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
        include: [{ model: User }, { model: Rating }, {model: Comment }], 
        attributes: {
          include: [
            [
              // Use plain SQL to add up average rating
              sequelize.literal(
                '(SELECT AVG(post_rating) FROM ratings WHERE ratings.post_id = post.id)'
              ),
              'averageRating',
            ],
          ],
        },
      });

    const posts = postData.map(post => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;