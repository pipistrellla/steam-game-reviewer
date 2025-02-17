const cors = require('cors');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const SteamStrategy = require('passport-steam').Strategy;

require('dotenv').config();

const app = express();

// Разрешаем запросы с фронтенда
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(
    session({ secret: 'secret-key', resave: false, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new SteamStrategy(
        {
            returnURL: process.env.STEAM_RETURN_URL,
            realm: process.env.STEAM_REALM,
            apiKey: process.env.STEAM_API_KEY,
        },
        (identifier, profile, done) => {
            // eslint-disable-next-line prefer-destructuring
            profile.steamid = identifier.match(/\d+$/)[0];
            return done(null, profile);
        },
    ),
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Запрос для редиректа на Steam
app.get('/auth/steam', passport.authenticate('steam'));

// Redirect после успешного входа
app.get(
    '/auth/steam/return',
    passport.authenticate('steam', {
        failureRedirect: 'http://localhost:3000',
    }),
    (req, res) => {
        res.redirect('http://localhost:3000/'); // Фронт обработает
    },
);

// API для получения текущего пользователя
app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(401).json({ error: 'Not authenticated' });
    }
    return res.json(req.user);
});

// Выход
app.get('/logout', (req, res) => {
    req.logout(() => res.redirect('http://localhost:3000'));
});

app.listen(3001, () =>
    console.log('🚀 Backend запущен на http://localhost:3001'),
);
