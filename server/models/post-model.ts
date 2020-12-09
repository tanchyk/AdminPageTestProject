import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface PostsAttributes {
    id: number;
    title: string;
    body: string;
    createdAt?: Date;
    updatedAt?: Date;
}
export interface PostsModel extends Model<PostsAttributes>, PostsAttributes {}
export class Posts extends Model<PostsModel, PostsAttributes> {}

export type PostsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): PostsModel;
};

export function PostsFactory (sequelize: Sequelize): PostsStatic {
    return <PostsStatic>sequelize.define("posts", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
    });
}