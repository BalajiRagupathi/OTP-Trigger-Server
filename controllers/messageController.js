const { accountSid,authToken,phoneNumber } = require("../utils/env");
const client = require('twilio')(accountSid, authToken);
const userData = require("../models/userData");

/**
 *
 * @body {*} message
 * @body {*} userId
 * @returns SMS sent response
 */
// OTP SMS send request controller
exports.sendOTP = async (req,res,next) => {
    try {
        const { message, userId } = req.body;

        const user =  userData.usersList.find(item => item.id == userId);

        if (!user)
           res.status(200).json({data: {},errorMessage: "User Not Found"});
        
        const twilioMessage = await client.messages.create({body: message, from: phoneNumber, to: user.phone});
        
        if ( twilioMessage.error_code ) 
            res.status(twilioMessage.error_code).json({error: twilioMessage.error_message});

        userData.OTPList.push({
            id: userData.OTPList.length+1,
            firstName: user.firstName,
            lastName:user.lastName,
            phone: user.phone,
            message,
            dateCreated: twilioMessage.dateCreated
        });
        res.status(200).json({data: {},successMessage: "Sent successfully"});
    } catch(err) {
        console.log(err);
        if (err.status)
            res.status(err.status).json({errorMessage: err.message});
        res.status(500).json({errorMessage: "Internal server error"});
    }
}