import * as sequelize from "sequelize";
import {UserFactory} from "./user-model";
import {PostsFactory} from "./post-model";
import {StatisticsFactory} from "./statistic-model";

export const dbConfig = new sequelize.Sequelize(
    "posts_database",
    "postgres",
    "bogdanGermany",
    {
        port: 5432,
        host: "localhost",
        dialect: "postgres",
        pool: {
            min: 0,
            max: 5,
            acquire: 30000,
            idle: 10000,
        },
        define: {
            timestamps: false
        }
    }
);

export const User = UserFactory(dbConfig);
export const Posts = PostsFactory(dbConfig);
export const Statistics = StatisticsFactory(dbConfig);

User.hasMany(Posts);
User.hasMany(Statistics);
Posts.hasMany(Statistics);