// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import NewProduct from './components/NewProduct';
import Products from './components/Products';
import UpdateProduct from './components/Updateproduct';
// import { CartProvider } from './components/CartContext';  
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';


function App() {
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="new" element={<NewProduct addNewProduct={() => {}} />} />
        <Route path="update/:id" element={<UpdateProduct />} />
        <Route path='/dashboard' element={<AllProducts/>}/>
      </Route>
      <Route path="products" element={<Products />} />
      <Route path='cart' element={<Cart/>}/>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
