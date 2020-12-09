import express, {Request, Response, NextFunction} from 'express';
import {User} from "../models/index";
import {UserModel} from "../models/user-model";
import postsRouter from "./posts.routes";
import statisticsRouter from "./statistics.routes";

const usersRouter = express.Router();

usersRouter.get('/', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const users: UserModel[] = await User.findAll();
        return res.status(200).json({users});
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

usersRouter.use('/:userId/posts', postsRouter);
usersRouter.use('/:userId/statistics', statisticsRouter);

export default usersRouter;