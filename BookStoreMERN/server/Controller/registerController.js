const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });
    await user.save();
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: "Error registering user", error });
  }
};

module.exports = registerController;
