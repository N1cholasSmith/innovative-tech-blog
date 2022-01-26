const router = require('express').Router();
const userRoutes = require('./userRoutes');
const techBlogRoutes = require('./techBlog');

router.use('/users', userRoutes);
router.use('/techBlog', techBlogRoutes);

module.exports = router;
