import { MenuItem, Select } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { get100Coins } from '../../../functions/get100Coins';
import "./styles.css"

function SelectCoins({ crypto1, crypto2, handleCoinChange }) {
    console.log("cc", crypto1);
    const [allCoins, setAllCoins] = useState([]);
    const [flag, setFlag] = useState(window.innerWidth);

    

    window.addEventListener('resize', ()=>{
        if (window.innerWidth<550) {
          setFlag(window.innerWidth)
        }else{
          setFlag(window.innerWidth)
        }
      });
    

    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        fontSize: flag < 550 ? "10px": "16px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
    }

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const coin100 = await get100Coins();
        if (coin100) {
            setAllCoins(coin100);
        }
    }


    return (

        <div className='coins-flex'>
            <p>Coin 1</p>
            <Select
                sx={styles}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={crypto1}
                label="Days"
                onChange={(event) => handleCoinChange(event, false)}
            >
                {
                    allCoins.filter((item) => item.id != crypto2).map((coin, i) => (
                        <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                    ))
                }
            </Select>
            <p>Coin 2</p>
            <Select
                sx={styles}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={crypto2}
                label="Days"
                onChange={(event) => handleCoinChange(event, true)}
            >
                {
                    allCoins.filter((item) => item.id != crypto1)
                        .map((coin, i) => (
                            <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>
                        ))
                }
            </Select>
        </div>
    )
}

export default SelectCoins