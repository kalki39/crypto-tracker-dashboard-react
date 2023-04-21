

function convertMarketCap(str) {
    str=str+"";
    let len=str.length;
    // let num=+(str);
    if(str>1000000000){
        return str.slice(0,str.length-9)+"B"
    }
    if(str>1000000){
        return str.slice(0,str.length-6)+"M"
    }
    if(str>1000){
        return str.slice(0,str.length-3)+"K"
    }

    return str;
}

export default convertMarketCap;