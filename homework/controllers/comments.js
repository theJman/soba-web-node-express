var comments = require('./../models/comment.js');

module.exports = {
  index: function(req, res) {
    console.log('method called1');
    res.json(comments.getAllForPost(req.params.pid));
  },
  show: function(req, res) {
    res.send( comments.getComment(req.params.id));
  },
  create: function(req, res) {
    
  },
  update: function(req, res) {
    
  },
  destroy: function(req, res) {
    
  }
};