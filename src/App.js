import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Resume from './Components/Resume';
import Certificates from './Components/Certificates';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Preloader from './Components/Preloader';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
<div>
<Header></Header>
  <Routes>
      <Route path='/' element={<Hero></Hero>}></Route>  
      <Route path='About' element={<About></About>}></Route>
      <Route path='Resume' element={<Resume></Resume>}></Route>    
      <Route path='Certificates' element={<Certificates></Certificates>}></Route>
      <Route path='Contact' element={<Contact></Contact>}></Route>      
      <Route path='Skills' element={<Skills></Skills>}></Route>
  </Routes>
<Footer></Footer>
</div>
  );
}

export default App;
