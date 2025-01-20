const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../model/User");
//User Registration

const usersController = {
    //Register
    register: asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;
        //Validate
        if (!username || !email || !password) {
            throw new Error("Please all fields are required");
        }
        //Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("User already exists");
        }
        //Hash the user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // Create the user and save into db
        const userCreated = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        //! Send the response

        res.json({
            username: userCreated.username,
            email: userCreated.email,
            id: userCreated._id,
        });
    }),
    //Login
    //profile
};

module.exports = usersController;