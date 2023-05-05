import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import WatchList from './pages/WatchList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={ <DashBoard /> }/>
            <Route path="/coin/:id" element={ <CoinPage /> }/>
            <Route path="/compare" element={ <ComparePage /> }/>
            <Route path="/watchlist" element={ <WatchList /> }/>
          </Routes> 
          
      </BrowserRouter>
    </div>
  );
}

export default App;
