import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import { CartContextProvider } from './context/cartContext'
import CartView from './components/CartView/CartView'
import OrderConfirm from './components/OrderConfirm/OrderConfirm'
import { exportDataWithBatch } from './services/firebase'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import SideBar from "./components/NavBar/SideBar";
import NavBar from './components/NavBar/NavBar'


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className='app-container'>
          <SideBar />
          <NavBar/>
        {/* <button onClick={exportDataWithBatch}>Export Data</button> */}
          <Routes>
            <Route path= '/' element= {<Homepage/>} />
            <Route path= '/products' element= {<ItemListContainer/>} />
            <Route path= '/product/:id' element= {<ItemDetailContainer/>} />
            <Route path= '/category/:categoryid' element= {<ItemListContainer/>} />
            <Route path= '/cart' element= {<CartView/>} />
            <Route path= '/order-confirmation/:orderid' element= {<OrderConfirm/>} />
            <Route path= '*' element = { <OrderConfirm/> } />
          </Routes>
        </div>
      <Footer/>
    </BrowserRouter>
  </CartContextProvider>
)}

export default App

