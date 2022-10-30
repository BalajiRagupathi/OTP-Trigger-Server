const userData = require("../models/userData");

/**
 *
 * @returns Users List
 */
// Users List request controller
exports.getUsersData = (req,res,next) => {
    res.status(200).json({data: userData.usersList});
}

/**
 *
 * @params {*} id
 * @returns User details
 */
// Single User details request controller
exports.getUserById = (req,res,next) => {
    const { params } = req;

    const user =  userData.usersList.find(item => item.id == params.id);

    if (!user)
        res.status(200).json({data: {},errorMessage: "User Not Found"})

    res.status(200).json({data: user });
}

/**
 *
 * @returns Notified users list
 */
// Notified users list request controller
exports.notifiedUsers = (req,res,next) => {
    res.status(200).json({data: userData.OTPList.sort((a,b) => new Date(b.dateCreated) - new Date(a.dateCreated))});
}