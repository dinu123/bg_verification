const User = require('./user'); // Ensure the correct path

// Define the createUser controller function
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const userList = await User.findAll();
    res.status(201).json(userList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const {userId} = req.params; 
   console.log(userId);
  try {
    const user = await User.findByPk(userId);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const newUser = await User.update(req.body, {
      where: {
        id: req.body.id,
      },
    },);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await User.destroy({
      where: {
        id: req.body.id,
      },
    },);
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = createUser
exports.getUsers = getUsers;
exports.getUserById = getUserById;
exports.updateUser = updateUser;

exports.deleteUser = deleteUser;
