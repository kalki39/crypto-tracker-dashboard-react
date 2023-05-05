import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BackToTop from '../components/Common/BackToTop';
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader';
import PaginationCom from '../components/Dashboard/PaginationCom';
import Search from '../components/Dashboard/Search';
import TabsComponent from '../components/Dashboard/Tab'
import { get100Coins } from '../functions/get100Coins';

function DashBoard() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [pagination, setpagination] = useState([]);


  const handlePageChange = (event, value) => {
    setPage(value);
    let previous = value - 1;
    setpagination(coins.slice(previous * 10, previous * 10 + 10))
  };


  function onSearchChange(ip) {
    console.log(ip);
    setSearch(ip);
  }

  var filteredCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()))

  useEffect(() => {
    getData();
  }, [])

  const getData = async () =>{
    const coin100=await get100Coins();
    if (coin100) {
      setCoins(coin100)
      setpagination(coin100.slice(0, 10))
      setIsLoading(false);
    }
  }
  return (
    <div>
      <Header />
      <BackToTop />
      {
        isLoading ? (
          <Loader />
        ) : (
          <div>
            <Search search={search} onSearchChange={onSearchChange} />
            <TabsComponent coins={search ? filteredCoins : pagination} />
            {!search && <PaginationCom page={page} handlePageChange={handlePageChange} />}
            </div>
        )}
          
    </div>
  )
}

export default DashBoard