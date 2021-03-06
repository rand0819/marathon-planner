const db = require('../models');

module.exports = app => {
  // Load index page
  app.get('/', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('index', {
        msg: 'Welcome To Reel Planner!',
        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  app.get('/preference', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('preference', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  app.get('/history', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('history', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  // route for home page
  app.get('/home', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('home', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  app.get('/movie', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('watch', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  app.get('/new', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('NEW', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  app.get('/suggest', (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render('SUGGEST', {

        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", (req, res) => {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
