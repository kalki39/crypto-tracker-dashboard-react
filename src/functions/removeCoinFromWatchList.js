import { toast } from "react-toastify";

        
export const removeCoinFromWatchList = (event,id,setIsCoinAdded) =>{
    
    event.preventDefault();
    if (window.confirm("Are you sure you want to remove this coin?")) {
        let watchlist= JSON.parse(localStorage.getItem("watchlist"));
        console.log(watchlist);
        if (watchlist) {
            let newList= watchlist.filter((coin) => coin!=id);
            setIsCoinAdded(false)
            localStorage.setItem("watchlist", JSON.stringify(newList))
            toast.success(id.charAt(0).toUpperCase() + id.slice(1)+" is removed sucessfully")
            // alert("Coin is removed from watchlist")
        }
        else{
            alert("srror")
        }
    }
    else{
        toast.success(id.charAt(0).toUpperCase() + id.slice(1)+" is could not removed")
        // alert("Coin is could not removed")
    }

}