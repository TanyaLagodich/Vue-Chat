import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import { UserRouter } from './routes/User';

import { UserModel } from './models/User';

const app = express();
const port = 3000;

app.use(express.urlencoded());
app.use(express.json());

app.use(UserRouter);

mongoose.connect('mongodb://localhost:27017/chat');

app.get('/', (req: Request, res: Response) => {
    console.log('Hello World');
    res.json({ message: "Welcome to bezkoder application." });
});

app.get('/users', (req, res) => {
    console.log('users');
    res.send('Hello World, users');
});


app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
})

/*
    app.METHOD(PATH< HADLER),
    где
    * app - экземпляр express
    * METHOD - метод запроса HTTP
    * PATH - путь на сервере
    * HANDLER - функция, выполняемая при сопоставлении маршрута
*/ 