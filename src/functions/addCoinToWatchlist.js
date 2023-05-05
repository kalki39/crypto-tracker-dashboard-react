import { toast } from "react-toastify";

export const addCoinToWatchlist = (event,id) =>{
    event.preventDefault();
    let watchlist= JSON.parse(localStorage.getItem("watchlist"));

    if (watchlist) {
        if (!watchlist.includes(id)) {
            watchlist.push(id);
            localStorage.setItem("watchlist", JSON.stringify(watchlist));
            // alert("Coin is added successfully")
            toast.success(id.charAt(0).toUpperCase() + id.slice(1)+" is added to watchlist")
        }
        else{
            // alert("Coin is already in watchlist")
            toast.error(id.charAt(0).toUpperCase() + id.slice(1)+" is already added to the watchlist!")
        }
    }
    else{
        watchlist=[id];
        localStorage.setItem("watchlist", JSON.stringify(watchlist))
        toast.success(id.charAt(0).toUpperCase() + id.slice(1)+" is added to watchlist")
        // alert("Coin is added successfully")
    }
}