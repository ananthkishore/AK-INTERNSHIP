import { StrictMode } from 'react'
import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/functionalComponents/home.jsx'
import About from './components/functionalComponents/about.jsx'
import ClassComponent from './components/classComponents/eg.jsx'
import Gallery from './components/functionalComponents/gallary.jsx'
import Contact from './components/functionalComponents/contact.jsx'
import NavBar from './components/functionalComponents/navbar.jsx'
import Signup from './components/functionalComponents/signUp.jsx'
import UseState from './components/functionalComponents/Hooks/useState.jsx'
import UseEffect from './components/functionalComponents/Hooks/useEffect.jsx'
import UseEffectApi from './components/functionalComponents/Hooks/useEffectApi.jsx'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    <About/>
    <ClassComponent/>
    <Gallery a="yo!"/>
    <Contact/>
    <BrowserRouter>
    <NavBar/>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/gallery" element={<Gallery/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/usestate" element={<UseState/>}></Route>
      <Route path="/use-effect" element={<UseEffect/>}></Route>
      <Route path="/use-effect-api" element={<UseEffectApi/>}></Route>
    </Routes>

    
    </BrowserRouter>
    
  </StrictMode>,
)