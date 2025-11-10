import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Resenas from "./components/Resenas/Resenas"
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
import Inicio from './components/Inicio/Inicio'
import MenuConteiner from './components/MenuConteiner/MenuConteiner'
import Ubicacion from './components/Ubicacion/Ubicacion'
import WspButton from './components/Wsp/WspButton'



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/resenas' element={<Resenas/>}/>
        <Route path='/menu' element={<MenuConteiner/>}/>
        <Route path='/menu/:categoryId' element={<MenuConteiner/>}/>
        <Route path='/ubicacion' element={<Ubicacion/>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
      <WspButton></WspButton>
      </BrowserRouter>
      
    </div>
  )
}

export default App
