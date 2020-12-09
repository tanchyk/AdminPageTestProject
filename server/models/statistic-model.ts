import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface StatisticsAttributes {
    id: number;
    updatedAt?: Date;
}
export interface StatisticsModel extends Model<StatisticsAttributes>, StatisticsAttributes {}
export class Statistics extends Model<StatisticsModel, StatisticsAttributes> {}

export type StatisticsStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): StatisticsModel;
};

export function StatisticsFactory (sequelize: Sequelize): StatisticsStatic {
    return <StatisticesStatic>sequelize.define("statistics", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    });
}