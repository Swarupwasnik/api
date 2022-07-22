import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bollywood from './component/Bollywood';
import Technology from './component/Technology';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Detail from './component/Detail';
import Health from './component/Health';
import Food from './component/Food';
 import Hollywood from './component/Hollywood';
// import Sport from './component/Sport'
import DataSender from './Blocks/Navigator';
const App = () => {
  return (

    <Detail>

      <div className="App">


        <BrowserRouter>

          <Navbar />

          <Routes>

            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/home' element={<Home />} />
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/technology' element={<Technology />} />
             <Route path='/food' element={<Food />} /> 
            <Route path='/health' element={<Health />} />
            <Route path='/hollywood' element={<Hollywood />} />

            {/* <Route path='/tourism' element={<Tourism />} /> */}

            <Route path='/:category/:id' element={<DataSender />} />
            


          </Routes>


        </BrowserRouter>

      </div>
    </Detail>
  );
}

export default App;

