const router = require('express').Router();
const { TechBlog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTechBlog = await TechBlog.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTechBlog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const techBlogData = await TechBlog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!techBlogData) {
      res.status(404).json({ message: 'No techBlog found with this id!' });
      return;
    }

    res.status(200).json(techBlogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
