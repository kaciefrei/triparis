const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const session = require("express-session");
const bodyParser = require("body-parser");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

app.set("view engine", "ejs");
app.set("views", "views");
app.listen(process.env.WEB_PORT, '0.0.0.0', function() {
    console.log("Listening on " + process.env.WEB_PORT);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: "SecretRandomStringDskghadslkghdlkghdghaksdghdksh",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // 1 day in msec
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, done) {
    // Here you can save the user profile to your database if needed
    return done(null, profile);
  }
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});


app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
);

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    
    res.redirect('/');
  }
);

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

app.get('/', (request, response) => {
    if (request.isAuthenticated()) {
        response.redirect('/excursion/menu'); // optional
    } else {
        let clientIp = request.ip;
        response.send(`Welcome on Triparis, dear ${clientIp}. I am a nodejs website. <a href="/auth/google">Login with Google</a>`);
    }
    
});


app.use("/static", express.static(__dirname + '/static'));
app.use("/excursion", require("./controllers/excursion.route"));
app.use("/place", require("./controllers/place.route"));
app.use("/choice", require("./controllers/choice.route"));
app.use("/auth", require("./controllers/auth.route"));


const auth = require("./utils/users.auth");
auth.initialization(app);
