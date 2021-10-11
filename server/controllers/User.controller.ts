import argon2 from 'argon2';
import { UserModel } from "../models/User";

export default class UserController {

    async create(req, res): Promise<void> {
        try {
            const { email, nickName, password } = req.body;
            const passwordHash = await argon2.hash(password);
            const postData = {
                password: passwordHash,
                email, 
                nickName, 
            }
            const user = await new UserModel(postData);
            user.save();
            res.json({
                user,
            });
        } catch (err) {
            console.log(err);
            res.json(err);
        }
    
    }

    async login(req, res) {
        const { login, password } = req.body;
        const user = 
        console.log(req.body);
    }

}