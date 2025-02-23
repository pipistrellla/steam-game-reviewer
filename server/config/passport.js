const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;
require('dotenv').config();

passport.use(
    new SteamStrategy(
        {
            returnURL: process.env.STEAM_RETURN_URL,
            realm: process.env.STEAM_REALM,
            apiKey: process.env.STEAM_API_KEY,
        },
        (identifier, profile, done) => {
            profile.steamid = identifier.match(/\d+$/)[0] ?? undefined;
            return done(null, profile);
        },
    ),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

module.exports = passport;
