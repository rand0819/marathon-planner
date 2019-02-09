const db = require("../models");

module.exports = function(app) {
  //------- User API's --------------
  //Create new user
  app.post("/api/newuser/", function(req, res) {
    db.User.create({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      EmailAddress: req.body.email,
      AuthId: req.body.authid //Need to grap this value from AuthO. Check with Mike S. on how AuthO works.
    }).then(function(user) {
      console.log(user);
      res.json(user);
    });
  });

  //Get current user
  app.get("/api/user/:id", function(req, res) {
    db.User.findAll({}).then(function(user) {
      console.log(user);
      res.json(user);
    });
  });

  //Get user history
  app.get("/api/history/:id", function(req, res) {
    db.UserHistory.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(history) {
      console.log(history);
      res.json(history);
    });
  });

  //Get current user
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  });

  //Post user preferences
  app.post("/api/pref/:userId/:prefId", function(req, res) {
    db.UserPreference.create({
      UserId: req.params.userId,
      MoviePrefId: req.params.prefId
    }).then(function(result) {
      res.json(result);
    });
  });

  //Get Movie Genres
  app.get("/api/genres/", function(req, res) {
    db.Genres.findAll({}).then(function(genre) {
      console.log(genre);
      res.json(genre);
    });
  });

  //Get Movie Genres
  app.get("/api/genres/", function(req, res) {
    db.Genres.findAll({}).then(function(genre) {
      console.log(genre);
      res.json(genre);
    });
  });

  // Get all examples
  app.get("/api/examples", (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", (req, res) => {
    db.Example.create(req.body).then(dbExample => {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });
};






