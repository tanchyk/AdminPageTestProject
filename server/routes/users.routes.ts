import express, {Request, Response, NextFunction} from 'express';
import {Posts, Statistics, User} from "../models/index";
import {UserModel} from "../models/user-model";
import {PostsModel} from "../models/post-model";
import {StatisticsModel} from "../models/statistic-model";

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

usersRouter.get('/:userId/statistics', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const userId: number = parseInt(req.params.userId);
        // @ts-ignore
        const statistics: StatisticsModel[] = await Statistics.findAll({where: {userId: userId}});
        return res.status(200).json({statistics});
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

usersRouter.get('/:userId/posts', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const userId = parseInt(req.params['userId']);
        // @ts-ignore
        const posts: PostsModel[] = await Posts.findAll({where: {userId: userId}});
        return res.status(200).json({posts});
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

usersRouter.post('/:userId/posts/new', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const userId = parseInt(req.params.userId);
        const {title, body}= req.body;
        if(title && body && userId) {
            // @ts-ignore
            const post = await Posts.create({title, body, createdAt: new Date(), updatedAt: new Date(), userId});
            return res.status(200).json({post});
        } else {
            throw new Error('No title or body was provided');
        }
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

usersRouter.put('/:userId/posts/:postId/edit', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const userId = parseInt(req.params.userId);
        const postId = parseInt(req.params.postId);
        const {title, body}= req.body;
        if(title && body && userId) {
            // @ts-ignore
            const post = await Posts.findOne({where: {id: postId}});
            if(post) {
                post.title = title;
                post.body = body;
                post.updatedAt = new Date();
                await post.save();
                // @ts-ignore
                await Statistics.create({updatedAt: new Date(), userId, postId});
                return res.status(200).json({post});
            } else {
                throw new Error();
            }
        } else {
            throw new Error('No title or body was provided');
        }
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

export default usersRouter;