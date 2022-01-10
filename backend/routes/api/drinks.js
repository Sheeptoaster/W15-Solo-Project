const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')
const { User, Checkin, Drink, Store } = require('../../db/models');

const router = express.Router();

router.get('/:drinkId', asyncHandler(async (req, res) => {
    const drinkId = req.params.drinkId;

    const selectedDrink = await Drink.findByPk(drinkId);

    res.json({selectedDrink});
}))

module.exports = router;
