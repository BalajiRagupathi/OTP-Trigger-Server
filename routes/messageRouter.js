const exp = require("express");
const MessageRouter = exp.Router();
const controller = require("../controllers/messageController");

// POST /otp/send
MessageRouter.post('/send',controller.sendOTP);

module.exports = MessageRouter;