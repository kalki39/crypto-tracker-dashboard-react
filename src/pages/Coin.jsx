import React from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { coinObject } from "../functions/convertObject";
import Loader from '../components/Common/Loader';
import Header from '../components/Common/Header';
import List from '../components/Dashboard/List';
import CoinInfo from '../components/Coin/CoinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/Coin/LineChart';
import { convertDate } from '../functions/convertDate';

function CoinPage() {
    const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(120);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data=await getCoinData(id);
    
    if(data){
      coinObject(setCoinData, data)
      const price= await getCoinPrices(id,days);
      if (price.length >0) {
        console.log("whooo>>", price);

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
          }]})
        setIsLoading(false);
      }
    }
  }

    return (
        <div>
            <Header />
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
                        <List coin={coinData} />
                    </div>
                    <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
                      <LineChart chartData={chartData}/>
                    </div>
                    <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                </>
            )}
        </div>
    )
}

export default CoinPage