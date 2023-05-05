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
import SelectDays from '../components/Coin/SelectDays';
import { settingChartData } from '../functions/settingChartData';
import TogglePriceType from '../components/Coin/PriceType';

function CoinPage() {
    const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState({});
  const [days, setDays] = useState(60);
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
      coinObject(setCoinData, data); 
      const price= await getCoinPrices(id,days,priceType); 
      if (price.length >0) {
        console.log("whooo>>", price);
        settingChartData(setChartData, price);        // setting initialy chart for days 60 and pricetype as price
      }
      setIsLoading(false);
    }
  }

  const handleDaysChange = async (event) =>{
    setDays(event.target.value)
    console.log("kalki");
    setDays(event.target.value)
    setIsLoading(true);
    const price= await getCoinPrices(id,event.target.value,priceType);  //instead of days we use e.target.value
      if (price.length >0) {
        console.log("whooo>>", price);
        settingChartData(setChartData, price);       
        setIsLoading(false);
      }   
  }

  const handlePriceTypeChange = async (event,newType) =>{
    console.log(newType);
    if(newType){
      setIsLoading(true);
    setPriceType(newType);
    const price= await getCoinPrices(id,days,newType);  //instead of priceType we use e.target.value
      if (price.length >0) {
        console.log("whooo>>", price);
        settingChartData(setChartData, price);       
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
                    <div className="grey-wrapper" style={{ padding: "0.5rem 0.5rem" }}>
                      <SelectDays days={days} handleDaysChange={handleDaysChange}/>
                      <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
                      <LineChart chartData={chartData} priceType={priceType}/>
                    </div>
                    <CoinInfo heading={coinData.name} desc={coinData.desc}/>
                </>
            )}
        </div>
    )
}

export default CoinPage