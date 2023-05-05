import React, { useEffect, useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import { IconButton, Switch } from '@mui/material';
import {Link} from "react-router-dom"
import Button from '../Button';
import { toast } from 'react-toastify';



export default function TemporaryDrawer() {
    const [open, setOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") == "dark" ? true : false
      );
    
      useEffect(() => {
        if (localStorage.getItem("theme") == "white") {
          setLight();
        } else {
          setDark();
        }
      }, []);
    
      const changeMode = () => {
        if (localStorage.getItem("theme") != "dark") {
          setDark();
        } else {
          setLight();
        }
        setDarkMode(!darkMode);
        toast.success("Theme Changed!");
      };
    
      const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      };
    
      const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      };


    return (
        <div>

            <IconButton onClick={() => setOpen(true)}>
                <MenuRoundedIcon className='link' />
            </IconButton>
            <Drawer
                anchor={"right"}
                open={open}
                onClose={() => setOpen(false)}
            >
               <div className="drawer-div">
        <Link to="/">
            <p className="link">Home</p>
        </Link>
        <Link to="/compare">
            <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
            <p className="link">Watchlist</p>
        </Link>
        <p className="link theme">Change Theme<Switch checked={darkMode} onClick={() => changeMode()} /></p>
        <Link to="/dashboard">
            <Button  text="Dashboard" onClick={()=>console.log("clicked")} outlined="false"/>
        </Link>
    </div>
            </Drawer>


        </div>
    );
}