import express, {Request, Response, NextFunction} from 'express';
import {Posts} from "../models/index";
import {PostsModel} from "../models/post-model";

const postsRouter = express.Router();

postsRouter.get('/', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const posts: PostsModel[] = await Posts.findAll();
        return res.status(200).json({posts});
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

export default postsRouter;