const router = require('express').Router();
// import middleware
const { authMiddleware } = require('../../utils/auth.js');


const {
  createUser,
  getSingleUser,
  incrementVictories,
  login,
} = require('../../controllers/user-controller');


// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser).put(authMiddleware, incrementVictories);

router.route('/login').post(login);

router.route('/me').get(authMiddleware, getSingleUser);

module.exports = router;