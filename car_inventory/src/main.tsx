import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { ThemeProvider } from "@mui/material/styles"; 


import { Home, Shop, Cart } from './components'; 
import './index.css';
import { theme } from './Theme/themes';  

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme = { theme }> // ADD THIS
      <Router>
        <Routes>
          <Route path='/' element={<Home title = {"Luxury delux car Shop"}/>} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </ThemeProvider> // ADD THIS
  </React.StrictMode>,
)



// "Luxury delux car Shop"



