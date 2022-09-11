import './App.css';
import Nav from './Nav';
import { Pay } from './Pay';
import Tttheam from './Tttheam';
import Location from './Location';
import Catering from './Catering';
import { BrowserRouter, Route , Router, Switch } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Signin from './Sigin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signin/>}/>
        <Route exact path="/Nav" element={<Nav/>}/>
        <Route exact path="/location" element={<Location/>}/>
        <Route exact path="/theam" element={<Tttheam/>}/>
        <Route exact path="/catering" element={<Catering/>}/>
        <Route exact path="/payment" element={<Pay/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
