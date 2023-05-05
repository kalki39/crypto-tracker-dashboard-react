import React, { useState } from 'react'
import { useEffect } from 'react'
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader';
import TabsComponent from '../components/Dashboard/Tab';
import { get100Coins } from '../functions/get100Coins'

function WatchList() {
    const [watchCoin, setWatchCoin] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let arr = JSON.parse(localStorage.getItem("watchlist"))

    useEffect(() => {
        getData();
    }, [])


    async function getData() {
        setIsLoading(true);
        const allCoins = await get100Coins();
        if (allCoins && arr && arr.length > 0) {
            setWatchCoin(allCoins.filter((coin) => arr.includes(coin.id)));
        }
        console.log(watchCoin);
        setIsLoading(false)
    }
    return (
        <div>
            <Header />
            {
                isLoading ?
                    <Loader /> :
                    arr && arr.length > 0 ? <TabsComponent coins={watchCoin} /> : <h1 className='nocoin'>NO COINS IN WACTHLIST</h1>
                    
            }
        </div>
    )
}

export default WatchList