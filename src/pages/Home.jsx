import React from 'react'
import Footer from '../components/Common/Footer';
import Header from '../components/Common/Header';
import MainComponent from '../components/LandingPage/MainComponent';

function Home() {
  localStorage.setItem("watchlist",JSON.stringify([]))
  return (
    <div>
        <Header />
        <MainComponent />
    </div>
  )
}

export default Home