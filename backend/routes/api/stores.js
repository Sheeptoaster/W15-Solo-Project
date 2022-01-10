const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')
const { User, Checkin, Drink, Store } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const data = await Store.findAll({
        order: [
            ['createdAt']
        ],
        limit: 3,
    })
    res.json({data});
}))

router.get('/:storeId', asyncHandler(async (req, res) => {
    const storeId = req.params.storeId;

    const selectedStore = await Store.findByPk(storeId);

    res.json({selectedStore});
}))


module.exports = router;
