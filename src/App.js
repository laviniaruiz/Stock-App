import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom'

// components folder
import Nav from './components/Nav'
import { stocks } from './components/Data2'
import { useState } from 'react'

// pages folder
import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Stock from './pages/Stock'

console.log(stocks)

function App() {

  let[stocksData, setStocksData] = useState(stocks)
  console.log(stocksData + "Stock Data")
 
   return (
     <>
       <Nav />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/stock/:symbol" element={<Stock stocks={stocksData} />} />
           <Route path="/stocks" element={<Dashboard stocks={stocksData} />} />
         </Routes>
     </>
   );
 }
 
 export default App;  