import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, price) => {
    setChartData({
        labels: price.map(item => convertDate(item[0])),
        datasets: [{
            data: price.map(item => item[1]),
            fill: true,
            borderColor: '#3a80e9',
            borderWidth: 2,
            backgroundColor: 'rgba(58, 128 ,233, 0.1)',
            tension: 0.25,     //give curvature
            pointRadius: 0,
        }]
    })
}