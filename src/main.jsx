import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsState from './context/Products/ProductsState.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartState from './context/Cart/CartState.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsState>
        <CartState>
          <App />
        </CartState>
      </ProductsState>
    </BrowserRouter>
  </React.StrictMode>,
)
