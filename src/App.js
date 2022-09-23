import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import Info from './Info';
import Error404 from './Error404';
import Data from './Data';

import Datas from './Datas';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>} />
      <Route path='info' element={<Info/>}/>
      <Route path="*" element={<Error404/>} />
      <Route path="data" element={<Data/>}/>
       
    
      <Route path="Id" element={<Datas/>}></Route>
      
     
     
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
