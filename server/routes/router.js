const express = require('express');

const steamAuthRoutes = require('./api/steamAuth');

const router = express.Router();

// Подключение всех маршрутов
router.use('/', steamAuthRoutes);

module.exports = router;
