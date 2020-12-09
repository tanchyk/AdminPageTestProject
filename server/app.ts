import express, {Errback, Request, Response, NextFunction, Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {dbConfig} from "./models";
import usersRouter from "./routes/users.routes";

const errorHandler = (err: Errback, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({error: err});
}

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(bodyParser());
app.use(errorHandler);

dbConfig
    .sync()
    .then(() => console.log("connected to db"))
    .catch(() => {
        throw "error";
    });

app.use('/users', usersRouter);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`PORT ${PORT}`)
});