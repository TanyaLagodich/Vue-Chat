import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import { UserModel } from './models/User';

const app = express();
const port = 3000;

async function connectMongoDB(): Promise<void> {
    try {
        await mongoose.connect('mongodb://localhost:27017/chat');

        const doc = new UserModel({
            name: 'Bill',
            email: 'billinitech.com',
            avatar: 'https://i.imgur.com/dM7Thhn.png'
          });

          await doc.save();

          console.log(doc.email); // 'bill@initech.com'
    } catch (err) {
        console.error(err);
    }
  }

app.get('/', (req: Request, res: Response) => {
    console.log('Hello World');
    connectMongoDB();
    res.send('Hello World');
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