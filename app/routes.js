var Cat = require('./models/cat');
  module.exports = function(app){
    //SAMPLE API ROUTE
    app.get('/api/cats', function(req, res){
      Cat.find(function(err, cats){
          if (err)
            res.send(err);
          res.json(cats);
      });
    });

    //ROUTE FOR ALL ANGULAR REQUESTS
    app.get('*', function(req, res){
      res.sendfile('./public/views/index.html');
    });
  }
