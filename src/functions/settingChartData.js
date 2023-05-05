import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, price1, price2 ) => {
    // console.log("cccc>>",crypto1);
    if (price2) {
        setChartData({
            labels: price1.map(item => convertDate(item[0])),
            datasets: [
                {
                    label: "crypto1",
                    data: price1.map(item => item[1]),
                    fill: false,
                    borderColor: '#3a80e9',
                    borderWidth: 2,
                    tension: 0.25,     //give curvature
                    pointRadius: 0,
                    yAxisID:"crypto1",
                },
                {
                    label: "crypto2",
                    data: price2.map(item => item[1]),
                    fill: false,
                    borderColor: '#61c96f',
                    borderWidth: 2,
                    tension: 0.25,     //give curvature
                    pointRadius: 0,
                    yAxisID:"crypto2",
                },
            ]
        })
    }
    else {
        setChartData({
            labels: price1.map(item => convertDate(item[0])),
            datasets: [{
                data: price1.map(item => item[1]),
                fill: true,
                borderColor: '#3a80e9',
                borderWidth: 2,
                backgroundColor: 'rgba(58, 128 ,233, 0.1)',
                tension: 0.25,     //give curvature
                pointRadius: 0,
                yAxisID:"crypto1",
            }]
        })
    }

}