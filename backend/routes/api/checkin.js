const express = require('express')
const asyncHandler = require('express-async-handler');

const { handleValidationErrors } = require('../../utils/validation')
const { setTokenCookie, restoreUser } = require('../../utils/auth')
const { Checkin, User, Drink, Store } = require('../../db/models')

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const data = await Checkin.findAll({
        include: [User, Drink, Store],
        order: [
            ['createdAt']
        ],
        limit: 3,
    })
    res.json({data});
}))


module.exports = router;
