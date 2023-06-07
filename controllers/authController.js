import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";

class CustomAPIError extends Error {
    constructor(message) {
        super(message);
    }
}

class BadRequestError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCode = StatusCodes.BAD_REQUEST;
    }
}

class NotFoundError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.StatusCode = StatusCodes.NOT_FOUND;
    }
}

const register = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        throw new BadRequestError('Please provide all values!')
    }
        const user = await User.create(req.body);
        res.status(StatusCodes.CREATED).json({ user });
}
const login = (req, res) => {
    res.send('Login user');
}
const updateUser = (req, res) => {
    res.send('Update user');
}

export {register, login, updateUser}