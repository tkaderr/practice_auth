const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys')

//order of require matters
require('./models/User');
require('./services/passport');



//attempt to connect to mongodb
mongoose.connect(keys.mongoURI);
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    //how long the cookie is
    maxAge: 30 * 24 * 60 * 60 * 1000, //cookie last for 30 days
    keys: [keys.cookieKey] //encrypted cookie
  })
);

//tell passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
