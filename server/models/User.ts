import { Schema, model } from 'mongoose';
import { IUser } from '../types/types';
import { isEmail } from 'validator';

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required:  [true, 'Email is required'],
        validate: isEmail,
    },
    avatar: String,
    nickName: {
        type: String,
        required: [true, 'nickName is required'],
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    confirmed: {
        type: Boolean,
        default: false,
    },
    confirm_hash: String,
    last_seen: Date,
}, {
    timestamps: true,
});

//TODO поправить на export default
export const UserModel = model<IUser>('User', UserSchema);
