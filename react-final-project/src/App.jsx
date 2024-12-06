import { Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Home from './components/Home'
import About from './components/About'
import Developer from './components/Developer'
import Products from './components/Products'
import Profile from './components/Profile'
import Showcase from './components/Showcase'
import Reviews from './components/Reviews'
import Artisan from './components/Artisan'
import Product from './components/Product'
function App() {
  return (
    <>
       <Navigation/>
       <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/developer" element={<Developer/>}/>
        <Route path='/products'>
            <Route index element={<Products/>}/>
            <Route path=':productid' element={<Product/>}/>
        </Route>
        <Route path ="/reviews" element={<Reviews/>}/>
        <Route path ="/profile" element={<Profile/>}/>
        <Route path ="/artisan" element={<Artisan/>}/>
        <Route path ="/showcase" element={<Showcase/>}/>
       </Routes>
    </>
  )
}

export default App
