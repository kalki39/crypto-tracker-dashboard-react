import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import DashBoard from './pages/DashBoard';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/dashboard' element={<DashBoard />}/>
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
