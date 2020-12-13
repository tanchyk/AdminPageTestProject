import React from "react";
import {Bar} from 'react-chartjs-2';
import {useSelector} from "react-redux";
import {selectUserStatistics} from "../store/statisticsSlice";

export const Chart = ({userId}) => {
    const statistics = useSelector((state) => selectUserStatistics(state, userId));

    const dateAry = [];
    statistics.forEach((obj) => {
        const date = obj.updatedAt.toString().slice(0,10).replace(/-/g,"-")
        if(!dateAry.includes(date)) {
            dateAry.push(date);
        }
    });

    const countAry = new Array(dateAry.length).fill(0)

    statistics.forEach((obj) => {
        const date = obj.updatedAt.toString().slice(0,10).replace(/-/g,"-")
        const index = dateAry.indexOf(date);
        countAry[index]++;
    });

    const chartData = {
        labels: dateAry,
        datasets: [
            {
                label: 'Edits',
                data: countAry,
                backgroundColor: '#298880'
            }
        ]
    }

    return (
        <div className="chart">
            <Bar
                data={chartData}
            />
        </div>
    )
}