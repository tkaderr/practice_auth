const passport = require('passport');

module.exports = (app) => {
//the 'google' string is refered to the GoogleStrategy. GoogleStrategy in the code has some string id called 'google'
    app.get('/auth/google', passport.authenticate('google', {
      //the scope specifies to google server what acces we want in this users profile and email
      scope: ['profile', 'email'],
      prompt : "select_account"
    })
    );

    //the passport will take code and get the user profile and email. The second argument is a middleware that executes.
    app.get(

    '/auth/google/callback',
    passport.authenticate('google'),
    (req,res)=> {
      res.redirect('/surveys');
    }
    );

    //the route when we go to, the associated code that will execute after (2nd param)
    app.get('/api/logout', (req,res)=> {
      req.logout(); //takes the cookie and kills the id
      res.redirect('/');
      console.log("logged out");
    })

    app.get('/api/current_user', (req,res)=> {
      res.send(req.user);
    })
};
