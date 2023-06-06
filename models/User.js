import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide name'],
        minlength: 3,
        maxlength: 20,
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valide email',
        },
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide password'],
        minlength: 6,
    },
    lastname: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'LastName',
    },
    location: {
        type: String,
        maxlength: 20,
        trim: true,
        default: 'My City',
    },
})

export default mongoose.model('User', UserSchema);