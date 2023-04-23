import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BackToTop from '../components/Common/BackToTop';
import Header from '../components/Common/Header'
import Loader from '../components/Common/Loader';
import PaginationCom from '../components/Dashboard/PaginationCom';
import Search from '../components/Dashboard/Search';
import TabsComponent from '../components/Dashboard/Tab'

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
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en      ")
      .then((res) => {
        console.log(res);
        setCoins(res.data)
        setpagination(res.data.slice(0, 10))
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
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