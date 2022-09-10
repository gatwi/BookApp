import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Catalog from "./pages/Catalog";
import Library from "./pages/Library";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";




const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/lib" element={<Library/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/shopping" element={<Cart/>} />
      </Routes>
    </Router>
  );
};

export default App;