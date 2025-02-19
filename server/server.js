const cors = require('cors');
const express = require('express');

const passport = require('./config/passport');
const sessionConfig = require('./config/sessions');
const routes = require('./routes/router');

require('dotenv').config();

const app = express();

// Разрешаем запросы с фронтенда
app.use(
    cors({
        origin: process.env.CLIENT_URL || 'http://localhost:3000',
        credentials: true,
    }),
);

// работа с сессиями
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

// Подключаем маршруты
app.use('/', routes);

const PORT = process.env.PORT_BACKEND || 3001;
app.listen(PORT, () =>
    console.log(`Backend запущен на http://localhost:${PORT}`),
);
