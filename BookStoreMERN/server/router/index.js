const express = require("express");
const router = express.Router();

const LoginController = require("../Controller/LoginController");
const addBook = require("../Controller/bookController.js");
const roleMiddleware = require("../Middleware/roleMiddleware.js");
const registerController = require("../Controller/registerController.js");
const authMiddleware = require("../Middleware/authMiddleware.js.js");

router.post("/login", LoginController);
router.post("/signup", registerController);

router.post(
  "/add",
  authMiddleware,
  roleMiddleware("Admin", "Librarian"),
  addBook
);
module.exports = router;
