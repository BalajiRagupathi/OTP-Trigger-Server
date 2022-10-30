require("dotenv").config();

const env = {
  port: process.env.PORT,
  accountSid: process.env.TWILIO_ACCOUNT_SID,
  authToken: process.env.TWILIO_AUTH_TOKEN,
  phoneNumber: process.env.TWILIO_PHONE_NUMBER
};

module.exports = env;
