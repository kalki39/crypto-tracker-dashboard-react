import Button from "../Button";
import {Link} from "react-router-dom"
import TemporaryDrawer from "./drawer";
import "./styles.css"
function Header() {
  return (
    <div className='navbar'>
    <h1 className="logo">CryptoTracker <span>.</span></h1>
    <div className="links">
        <Link to="/">
            <p className="link">Home</p>
        </Link>
        <Link to="/compare">
            <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
            <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
            <Button  text="Dashboard" onClick={()=>console.log("clicked")} outlined="false"/>
        </Link>
        
    </div>
    <div className="mobile-drawer">
        <TemporaryDrawer />
    </div>
    </div>
  )
}

export default Header;