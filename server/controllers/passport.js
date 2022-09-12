const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
const User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: ["profile", "email"],
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ email: profile.emails[0].value }, function (err, user) {
        if (err) {
          return done(err, false, { message: err });
        } else {
          if (user != "" && user != null) {
            return done(null, user, { message: "User " });
          } else {
            const userData = new User({
              serviceId: profile.id,
              username: profile.displayName.split(" ").join(""),
              email: profile.emails[0].value,
              avatar: profile.photos[0].value,
            });
            // send email to user just in case required to send the newly created
            // credentails to user for future login without using google login
            userData.save(function (err, newuser) {
              if (err) {
                return done(null, false, {
                  message: err + " !!! Please try again",
                });
              } else {
                return done(null, newuser);
              }
            });
          }
        }
      });
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: ["user:email"],
      callbackURL: process.env.GITHUB_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ email: profile.emails[0].value }, function (err, user) {
        if (err) {
          return done(err, false, { message: err });
        } else {
          if (user != "" && user != null) {
            return done(null, user, { message: "User " });
          } else {
            console.log("profile", profile.emails[0].value);
            const userData = new User({
              serviceId: profile.id,
              username: profile.username,
              email: profile.emails[0].value,
              avatar: profile.photos[0].value,
            });
            // send email to user just in case required to send the newly created
            // credentails to user for future login without using google login
            userData.save(function (err, newuser) {
              if (err) {
                return done(null, false, {
                  message: err + " !!! Please try again",
                });
              } else {
                return done(null, newuser);
              }
            });
          }
        }
      });
      // done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
