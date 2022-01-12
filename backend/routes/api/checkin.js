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



router.post('/create', asyncHandler(async (req, res) => {
    const { userId, drink, location, comment } = req.body;

    const drinkId = await Drink.findOne({
        where: {
            name: drink
        }
    })

    const storeId = await Store.findOne({
        where: {
            name: location
        }
    })

    const checkin = await Checkin.create({
        userId,
        drinkId: drinkId.id,
        storeId: storeId.id,
        comment
    })

    res.json(checkin)
}))

router.get('/:checkinId', asyncHandler(async (req, res) => {
    const checkinId = req.params.checkinId;
    const data = await Checkin.findByPk(checkinId)
    res.json({data});
}))


module.exports = router;
