//Iniciar json server -> npm run json-server 

import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import ZapatillasPage from './pages/zapatillas/ZapatillasPage';
import RastreadorPage from './pages/RastreadorPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import CheckoutPage from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import Footer from './components/Footer/Footer';
import ThankYouPage from './pages/ThankYouPage';

function App() {    
   
  return (

  <div className='App'>
     
    <CartProvider>
    <BrowserRouter>

      <NavBar />  

      <Routes>

        <Route path='/' > 

          <Route index element={< HomePage />} />

          <Route path='/zapatillas'>
            <Route index element={< ZapatillasPage />} />
            <Route path=":id" element={< ProductDetailPage />} />          
          </Route>

          <Route path="zapatillas/categoria/:categoria" element={ < ZapatillasPage /> } />
          <Route path="zapatillas/subcategoria/:subcategoria" element={ < ZapatillasPage /> } />            
          <Route path='/rastreador' element={< RastreadorPage />} />

          <Route path='/checkout'>
            <Route index element={< CheckoutPage /> } />
            <Route path=":orderID" element={ <ThankYouPage /> } />
          </Route>

          <Route path='/carrito' element={< CartPage /> } />          
          <Route path='*' element={< NotFoundPage />} />
        </Route>
        
      </Routes>

      <Footer />

    </BrowserRouter>    
    </CartProvider>

  </div>

  );
}



export default App;


