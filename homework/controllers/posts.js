var posts = require('./../models/post.js');

module.exports = {
  index: function(req, res) {
    res.json(posts.getAll());
  },
  show: function(req, res) {
    res.send(posts.getPost(req.params.id));
  },
  create: function(req, res) {
    // ..
  },
  update: function(req, res) {
    // ..
  },
  destroy: function(req, res) {
    
  }
};