import './App.css';
import Navbar from './navbar';
import Home from './home';
import Fav from './favourites';
import Addfav from './addfav';
import About from './about';
import State from './state';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from './footer';

function App() {  
  let title ="favourite  movie and tv shows"
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/favourites' element={<Fav data={title}/>} />
          <Route path='/addfav' element={<Addfav/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/state' element={<State/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
