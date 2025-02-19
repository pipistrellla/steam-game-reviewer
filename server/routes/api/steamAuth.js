const express = require('express');
const passport = require('passport');

const authController = require('../../controllers/auth.controller');

const router = express.Router();

// Запрос для редиректа на Steam
router.get('/auth/steam', passport.authenticate('steam'));

// редирект после успешного входа
router.get(
    '/auth/steam/return',
    passport.authenticate('steam', {
        failureRedirect: process.env.REDIRECT_IF_ERROR,
    }),
    authController.getCurrentUser,
);

// Получение текущего пользователя
router.get('/me', authController.getCurrentUser);

// Выход
router.get('/logout', authController.logoutUser);

module.exports = router;
