import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js"

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        throw new BadRequestError('Please provide all values!')
    }
    
    const userAlreadyExists = await user.findOne({ email });
    if (userAlreadyExists) {
        throw new BadRequestError('Email all ready in use');
    }
        const user = await User.create({name, email, password});
        const token = user.createJWT();
        attachCookie({ res, token });
        res.status(StatusCodes.CREATED).json({ 
            user: { email:user.email, 
                    lastName:user.lastname, 
                    location:user.location, 
                    name:user.name
                },
                location: user.location 
            });
};
const login = (req, res) => {
    res.send('Login user');
}
const updateUser = (req, res) => {
    res.send('Update user');
}

export {register, login, updateUser}