const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const checkinRouter = require('./checkin.js');
const drinkRouter = require('./drinks');
const storeRouter = require('./stores');

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');

const { User } = require('../../db/models');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/checkins', checkinRouter);

router.use('/drinks', drinkRouter);

router.use('/stores', storeRouter);

module.exports = router;
