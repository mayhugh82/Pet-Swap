// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/owners/", function(req, res) {
    // db.Post.findAll({})
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });


  });

  // Get route for returning matching sitters of a specific category
  app.get("/api/sitters/state/:state/city/:city/duration/:duration/quantity/:quantity/size/:size/temperament/:temperament", function(req, res) {
    db.Sitter.findAll({
        where: {
            state: req.params.state,
            city: req.params.city,
            duration: req.params.duration,
            quantity: req.params.quantity,
            size: req.params.size,
            temperament: req.params.temperament,
        }
        
    })
    .then (function(dbSitters) {
        res.json(dbSitters);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/posts/:id", function(req, res) {
    // db.Post.findOne({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
  });

  // POST route for saving a new post
  app.post("/api/sitter", function(req, res) {
//    res.json(req.body);
    db.Sitter.create({
      name: req.body.name,
      photo: req.body.photo,
      city: req.body.city,
      state: req.body.state,
      email: req.body.email,
      duration: req.body.duration,
      quantity: req.body.quantity,
      size: req.body.size,
      temperament: req.body.temperament,
    })
      .then(function(dbSitter) {
        res.json(dbSitter);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/posts/:id", function(req, res) {
    // db.Post.destroy({
    //   where: {
    //     id: req.params.id
    //   }
    // })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    // db.Post.update(req.body,
    //   {
    //     where: {
    //       id: req.body.id
    //     }
    //   })
    //   .then(function(dbPost) {
    //     res.json(dbPost);
    //   });
  });
};
