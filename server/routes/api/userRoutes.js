const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  incrementVictories,
  login,
} = require('../../controllers/user-controller');

console.log("hello world");

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, incrementVictories);

router.route('/login').post(login);

router.route('/me').get(getSingleUser);

module.exports = router;