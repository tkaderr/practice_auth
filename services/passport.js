const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done)=>{
  //user.id is not the google profile id, it is the primary key generated when a new user is added to the table
  //dont want to use google profile id because we could have user authenticate with different logins such as facebook etc.
//stuffed that user.id into passport

  done(null, user.id)
})


passport.deserializeUser((id, done)=>{
  console.log("this is the id",id);
  User.findById(id)
    .then(user => {
      done(null,user);
    })
})

//create new instance of GoogleStrategy
//going to pass in arguments on how to auth for google
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback', //route user will be sent to after user grants permission
  proxy: true
}, async ( accessToken, refreshToken, profile, done ) => {
    const existingUser = await User.findOne({googleId: profile.id});
      if(existingUser){
        //null means there are no errors founds
        //seconds argument is the user that is founds
        //done tells the Strategy that we are done with strategy
        done(null, existingUser);
      }
      else{
        const user = await new User({googleId: profile.id}).save();
        done(null,user); //user is also another model instance but use this one
      }
    }
  )
);
