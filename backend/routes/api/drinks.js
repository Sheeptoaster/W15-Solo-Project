const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')
const { User, Checkin, Drink, Store, Flavor, FlavorJoin } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const data = await Drink.findAll({
        include: [Flavor],
        order: [
            ['createdAt']
        ],
        limit: 3,
    })
    res.json({ data });
}))

router.get('/loaddrinks', asyncHandler(async (req, res) => {
    const data = await Drink.findAll();

    res.json({ data });
}))

router.get('/search/:searchId', asyncHandler(async (req, res) => {
    const searchKey = req.params.searchId;

    const data = await Drink.findAll({
        where: {
            name: {
                [Op.like]: searchKey
            }
        }
    })

    res.json({data})
}))

router.get('/:drinkId', asyncHandler(async (req, res) => {
    const drinkId = req.params.drinkId;

    const selectedDrink = await Drink.findByPk(drinkId);

    res.json({selectedDrink});
}))

module.exports = router;
