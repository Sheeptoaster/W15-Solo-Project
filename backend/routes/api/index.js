const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const checkinRouter = require('./checkin.js')

const asyncHandler = require('express-async-handler');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');

const { User } = require('../../db/models');


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/checkins', checkinRouter);

module.exports = router;
