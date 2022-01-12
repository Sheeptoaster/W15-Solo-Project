const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { handleValidationErrors } = require('../../utils/validation')
const { User, Checkin, Drink, Store } = require('../../db/models');

const router = express.Router();


//Signup Validation
const validateSignUp = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
]

//User Sign Up Form
router.post('/', validateSignUp, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
})
);


router.get('/:userId', asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const currentUser = await User.findByPk(userId);

    res.json({ currentUser })
}))

router.get('/:userId/checkins', asyncHandler(async (req, res) => {
    const userId = req.params.userId;

    const userDetails = await Checkin.findAll({
        where: {
            userId: userId
        },
        include: [
            {
                model: Drink,
                where: {
                    userId
                }
            },
            {
                model: Store,
            }
        ]
    })

    res.json({ userDetails });
}))




module.exports = router;
