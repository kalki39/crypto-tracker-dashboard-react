import React from 'react'
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';


function Grid({ coin }) {
    return (
        <div className={`card ${
            coin.price_change_percentage_24h < 0 && "card-red"
        }`}>
            <div className="info-flex">
                <img src={coin.image} alt="" className="coin-logo" />
                <div className="name-col">
                    <p className='coin-sym'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>

            {
                coin.price_change_percentage_24h > 0 ? (
                    <div className="chip-flex">
                        <div className="price-chip">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="icon-chip">
                            <TrendingUpRoundedIcon/>
                        </div>
                    </div>
                ) : (
                    <div className="chip-flex">
                        <div className="price-chip red-chip">
                            {coin.price_change_percentage_24h.toFixed(2)}%
                        </div>
                        <div className="icon-chip red-chip">
                            <TrendingDownRoundedIcon/>
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
    )
}

export default Grid