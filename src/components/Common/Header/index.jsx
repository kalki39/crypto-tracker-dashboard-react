import Button from "../Button";
import TemporaryDrawer from "./drawer";
import "./styles.css"
function Header() {
  return (
    <div className='navbar'>
    <h1 className="logo">CryptoTracker <span>.</span></h1>
    <div className="links">
        <a href="/">
            <p className="link">Home</p>
        </a>
        <a href="/">
            <p className="link">Compare</p>
        </a>
        <a href="/">
            <p className="link">Watchlist</p>
        </a>
        <a href="/">
            <Button  text="Dashboard" onClick={()=>console.log("clicked")} outlined="false"/>
        </a>
        <a href="/">
            <Button  text="tv" onClick={()=>console.log("clicked")} outlined="true"/>
        </a>
    </div>
    <div className="mobile-drawer">
        <TemporaryDrawer />
    </div>
    </div>
  )
}

export default Header;