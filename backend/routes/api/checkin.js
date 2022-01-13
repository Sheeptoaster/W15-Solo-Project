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
    res.json({ data });
}))



router.post('/create', asyncHandler(async (req, res, next) => {
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

    if (drinkId && storeId) {

        const checkin = await Checkin.create({
            userId,
            drinkId: drinkId.id,
            storeId: storeId.id,
            comment
        })

        res.json(checkin)
    } else {
        const err = new Error('Checkin Create Failed');
        err.status = 409;
        err.title = 'Checkin Create Failed'
        err.errors = ['Please provide an existing drink and location.'];
        return next(err);
    }
}))

router.get('/:checkinId', asyncHandler(async (req, res) => {
    const checkinId = req.params.checkinId;
    const data = await Checkin.findByPk(checkinId)
    res.json({ data });
}))

router.put('/:checkinId/edit', asyncHandler(async (req, res) => {
    const checkinId = req.params.checkinId;

    const { drink, location, comment } = req.body;


    const drinkId = await Drink.findOne({
        where: {
            name: drink
        }
    })

    const locationId = await Store.findOne({
        where: {
            name: location
        }
    })

    const selectedCheckin = await Checkin.findByPk(checkinId)

    const updatedCheckin = await selectedCheckin.set({
        drinkId: drinkId.id,
        storeId: locationId.id,
        comment,
    })

    if (updatedCheckin) {
        const data = await updatedCheckin.save();

        return res.json(data)
    }
}))

router.delete('/:checkinId/delete', asyncHandler(async (req, res) => {
    const checkinId = req.params.checkinId;

    const deleteCheckin = await Checkin.findByPk(checkinId);

    await deleteCheckin.destroy();
    return res.json();
}))


module.exports = router;
