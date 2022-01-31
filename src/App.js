import './App.css';
//Iniciar json server -> npm run json-server 

import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ZapatillasPage from './pages/zapatillas/ZapatillasPage';
import Hombre from './pages/zapatillas/Hombre';
import Mujer from './pages/zapatillas/Mujer';
import Nino from './pages/zapatillas/Nino';
import Novedades from './pages/zapatillas/Novedades';
import LanzamientoPage from './pages/LanzamientoPage';
import SalesPage from './pages/SalesPage';
import RastreadorPage from './pages/RastreadorPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {    
   
  return (
      
  <BrowserRouter>

    <NavBar />  

    <Routes>

      <Route path='/' > 

        <Route index element={< HomePage />} />

        <Route path='/zapatillas'>
          <Route index element={< ZapatillasPage />} />
          <Route path='hombre' element={< Hombre />} />
          <Route path='mujer' element={< Mujer />} />
          <Route path='nino' element={< Nino />} />
          <Route path='novedades' element={< Novedades />} />     
          <Route path=":id" element={< ProductDetailPage />} />          
        </Route>

        <Route path='/lanzamiento' element={< LanzamientoPage />} />
        <Route path='/sales' element={< SalesPage />} />
        <Route path='/rastreador' element={< RastreadorPage />} />        
     
        <Route path='*' element={< NotFoundPage />} />
      </Route>
      
    </Routes>  

  </BrowserRouter> 

  );
}



export default App;


