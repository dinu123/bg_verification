const express = require('express');
const router = express.Router();
const userController = require('./user-controller');
const passport = require('../../config/auth'); // Adjust path if necessary
const REST_API = require('../../util/api-util')
// Define a route for creating a user
router.post('/', userController.createUser);
router.put('/', userController.updateUser);
router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.delete('/', userController.deleteUser);

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userController.verifyUser(username, password);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Generate a token for the user (use your method to generate a token)
   

    res.json({ token: user.token,user_role:user.user_role});
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Protect routes with Bearer strategy
router.use('/protected', passport.authenticate('bearer', { session: false }));

module.exports = router;
