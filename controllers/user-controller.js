const HttpError = require('../models/http-error')
const {validationResult} = require("express-validator")

const db = require('../index');

const getAllUserList = async (req, res, next) => {
    try {
        const [results] = await db.query('SELECT * FROM user');
        if (results.length === 0) {
            return next(new HttpError('No Data found', 404));
        }
        res.json(results);
    } catch (error) {
        console.error(error);
        return next(new HttpError('Something went wrong. Please try again', 500));
    }
};



exports.getAllUserList = getAllUserList;
