import React from 'react';
import "./styles.css";
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import convertMarketCap from '../../../functions/convertMarketCap';

function List({ coin }) {
    return (
        <tr className='list-row'>
            <Tooltip title="COIN IMAGE" placement='bottom-start' >
                <td className="td-img">
                    <img src={coin.image} alt="" className="coin-logo" />
                </td>
            </Tooltip>
            <Tooltip title="COIN INFO" placement='bottom-start' >
                <td className="name-col">
                    <p className='coin-sym'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </td>
            </Tooltip>

            <Tooltip title="TODAY LOSS / PROFIT" placement='bottom-start' >
                {
                    coin.price_change_percentage_24h > 0 ? (
                        <td className="chip-flex">
                            <p className="price-chip">
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </p>
                            <p className="icon-chip">
                                <TrendingUpRoundedIcon />
                            </p>
                        </td>
                    ) : (
                        <td className="chip-flex">
                            <p className="price-chip red-chip">
                                {coin.price_change_percentage_24h.toFixed(2)}%
                            </p>
                            <p className="icon-chip red-chip">
                                <TrendingDownRoundedIcon />
                            </p>
                        </td>
                    )
                }
            </Tooltip>

            <Tooltip title="CURRENT PRIZE" placement='bottom-end'>
                <td className="info-container ">
                    <h3 className="price td-center-align" style={{
                        color: coin.price_change_percentage_24h > 0 ? "var(--green)" : "var(--red)"
                    }}>
                        ${coin.current_price.toLocaleString()}
                    </h3>
                </td>
            </Tooltip>

            
            <Tooltip title="TOTAL VOLUME" placement='bottom-end'>
                <td className='volume'><p className="total-volume td-right-align">{coin.total_volume.toLocaleString()}</p></td>
            </Tooltip>
            {

            }
            <Tooltip title="MARKET CAP" placement='bottom-end' >
                <td className='bigScreen-market-cap'><p className="total-volume td-right-align ">{coin.market_cap.toLocaleString()}</p></td>
            </Tooltip>

            <Tooltip title="MARKET CAP" placement='bottom-end' >
                <td className='mobile-market-cap'><p className="total-volume td-right-align ">{convertMarketCap(coin.market_cap)}</p></td>
            </Tooltip>
        </tr>
    )
}

export default List