import express from "express";
import { UserController } from './../controllers';

const router = express.Router();

const UserCntrl = new UserController();

router.post('/login', (req, res) => {
    console.log(req.body);
    res.send('login is working');
});

router.post('/registration', UserCntrl.create);

export const UserRouter = router;