import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import Info from './Info';
import Error404 from './Error404';
import Data from './Data';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='info' element={<Info/>}></Route>
      <Route path="*" element={<Error404/>}></Route>
      <Route path="data" element={<Data/>}></Route>
     
     
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
