const express = require('express')
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { setTokenCookie, restoreUser } = require('../../utils/auth')
const { Checkin, User, Drink, Store } = require('../../db/models')

const router = express.Router();


const checkinValidator = [
    check('drink')
        .exists({ checkFalsy: true })
        .withMessage("Please select a drink."),
    check('location')
        .exists({ checkFalsy: true })
        .withMessage("Please select a location."),
    check('comment')
        .exists({ checkFalsy: true })
        .withMessage("Please enter a comment."),
    handleValidationErrors,
]


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



router.post('/create', checkinValidator, asyncHandler(async (req, res, next) => {
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
    res.json({ data });
}))

router.put('/:checkinId/edit', checkinValidator, asyncHandler(async (req, res) => {
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
