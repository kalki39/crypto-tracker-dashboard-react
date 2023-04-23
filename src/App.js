import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';
import CoinPage from './pages/Coin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={ <DashBoard /> }/>
            <Route path="/coin/:id" element={ <CoinPage /> }/>
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
