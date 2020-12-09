import express, {Request, Response, NextFunction} from 'express';
import {QueryResult} from "pg";
import {StatisticsModel} from "../models/statistic-model";
import {Statistics} from "../models";

const statisticsRouter = express.Router();

statisticsRouter.get('/', async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
        const userId: number = parseInt(req.params.userId);
        const statistics: StatisticsModel[] = await Statistics.findAll({userId: userId});
        return res.status(200).json({statistics});
    } catch (e) {
        next(e);
        return res.status(500);
    }
});

export default statisticsRouter;