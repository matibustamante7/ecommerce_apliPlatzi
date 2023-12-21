import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Views/Header'
import Home from './Views/Home'
import CardDetail from './components/CardDetail/CardDetail'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:idProduct' element={<CardDetail />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes> 
    </>
  )
}

export default App
