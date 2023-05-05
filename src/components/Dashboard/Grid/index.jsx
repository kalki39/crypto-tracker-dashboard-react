import React, { useState } from 'react'
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { removeCoinFromWatchList } from '../../../functions/removeCoinFromWatchList';
import { addCoinToWatchlist } from '../../../functions/addCoinToWatchlist';



function Grid({ coin }) {

    const watchlist = JSON.parse(localStorage.getItem("watchlist"));
    const [isCoinAdded, setIsCoinAdded] = useState(watchlist?.includes(coin.id));

    function disabledEventPropagation(event) {
        event.preventDefault();
        console.log(coin.id);
        //    let arr= localStorage.getItem("watchlist") ? JSON.parse(localStorage.getItem("watchlist")) : []
        //    arr.push(coin.id)
        //    localStorage.setItem("watchlist",JSON.stringify(arr))
        //    console.log(arr);
        if (isCoinAdded) {
            removeCoinFromWatchList(event, coin.id, setIsCoinAdded)
        }
        else {
            addCoinToWatchlist(event, coin.id)
            setIsCoinAdded(true);
        }
    }
    return (
        <Link to={`/coin/${coin.id}`}>
            <div className={`card ${coin.price_change_percentage_24h < 0 && "card-red"
                }`}>
                <div className="info-flex">
                    <img src={coin.image} alt="" className="coin-logo" />
                    <div className="name-col">
                        <p className='coin-sym'>{coin.symbol}</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                    <div className={
                        coin.price_change_percentage_24h < 0 ? "watchlist-icon-red" : "watchlist-icon"
                    } onClick={disabledEventPropagation}>
                        {isCoinAdded ? <StarIcon /> : <StarOutlineIcon />}
                    </div>
                </div>

                {
                    coin.price_change_percentage_24h > 0 ? (
                        <div className="chip-flex">
                            <div className="price-chip">
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className="icon-chip">
                                <TrendingUpRoundedIcon />
                            </div>
                        </div>
                    ) : (
                        <div className="chip-flex" >
                            <div className="price-chip red-chip">
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </div>
                            <div className="icon-chip red-chip">
                                <TrendingDownRoundedIcon />
                            </div>
                        </div>
                    )
                }

                <div className="info-container">
                    <h3 className="price" style={{
                        color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"
                    }}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </div>

                <p className="total-volume">Total Volume : {coin.total_volume.toLocaleString()}</p>
                <p className="total-volume">Market Cap : {coin.market_cap.toLocaleString()}</p>


            </div>
        </Link>
    )
}

export default Grid