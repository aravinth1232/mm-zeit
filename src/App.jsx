import './App.css'
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Navbar from './components/Navbar'
import { AnimatePresence, motion } from 'framer-motion';
import Services from './components/Services'
import CursorTrail from './components/CursorTrail'



function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="sync">

<motion.div
        
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
       
      />


      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path='/services' element={ <Services /> } />
      </Routes>
    </AnimatePresence>
  );
}


function App() {
  
  

  return (
    <>
   

   <Router>
    <Navbar />
    <CursorTrail />
    <AnimatedRoutes />
    
   
   </Router>
  
    
    </>
  )
}

export default App
