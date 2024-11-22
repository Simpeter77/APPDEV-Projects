import Home from './components/Home'
import About from './components/About'
import Games from './components/Games'
import NotFound from './components/NotFound'
import Navigation from './Navigation'
import Game from './components/Game'
import { Routes, Route, Link} from 'react-router-dom'
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
        <Route path='/games'>
            <Route index element={<Games/>}/>
            <Route path=':gameId' element={<Game/>}/>
        </Route>
      <Route path ='*' element = {<NotFound/>}/>
    </Routes>
    </>
  )
}
export default App
