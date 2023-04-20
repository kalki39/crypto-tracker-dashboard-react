import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tab'

function DashBoard() {

  const [coins,setCoins]= useState([]);

  useEffect(()=>{
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en      ")
      .then((res)=>{
        console.log(res);
        setCoins(res.data)
      })
      .catch((err)=>{
        console.log(err);
      })
    },[])
  return (
    <div>
        <Header />
        <TabsComponent coins={coins}/>
    </div>
  )
}

export default DashBoard