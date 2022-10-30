const exp = require("express");
const UserRouter = exp.Router();
const controller = require("../controllers/userController");

// GET /users
UserRouter.get('/users',controller.getUsersData);

// GET /user/:id
UserRouter.get('/user/:id',controller.getUserById);

// GET /users/notified
UserRouter.get('/users/notified',controller.notifiedUsers);

module.exports = UserRouter;