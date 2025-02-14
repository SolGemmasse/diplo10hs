
import NavbarComponent from './components/NavbarCom';

import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ProductosPage from './pages/ProductosPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (


    <div className="App">
      <div>
        <Header />

        <BrowserRouter>
          <NavbarComponent></NavbarComponent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="nosotros" element={<NosotrosPage />} />
            <Route path="productos" element={<ProductosPage />} />
            <Route path="contacto" element={<ContactoPage />} />

          </Routes>
        </BrowserRouter>
      </div>



      <Footer></Footer>


    </div>

  );
}


export default App;
